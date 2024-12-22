/*
Copyright 2024 Olav "Olavorw" Sharma - 4934 (https://4934.tech)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

interface Shape {
    x: number
    y: number
    radius: number
    color: string
    vx: number
    vy: number
    originalSpeed: number
    throwVelocity: { x: number; y: number } | null
}

const createShape = (width: number, height: number, screenSize: number): Shape => {
    const sizeMultiplier = Math.min(width, height) / 1000
    const baseRadius = 50 + Math.random() * 150
    const radius = baseRadius * sizeMultiplier

    const speedMultiplier = screenSize / 1000
    const speed = (Math.random() - 0.5) * speedMultiplier
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: radius,
        color: `rgba(${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(Math.random() * 50 + 50)}, ${Math.random() * 0.1 + 0.2})`,
        vx: speed,
        vy: speed,
        originalSpeed: Math.abs(speed),
        throwVelocity: null
    }
}

export default function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [screenSize, setScreenSize] = useState(0)
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
    const [prevMousePosition, setPrevMousePosition] = useState<{ x: number; y: number } | null>(null)
    const [mouseVelocity, setMouseVelocity] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

    const shapes = useMemo(() => {
        const width = typeof window !== 'undefined' ? window.innerWidth : 1920
        const height = typeof window !== 'undefined' ? window.innerHeight : 1080
        const size = Math.sqrt(width * height)
        const shapeCount = Math.max(3, Math.floor(size / 300))
        return Array.from({ length: shapeCount }, () => createShape(width, height, size))
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number

        const updateScreenSize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            const size = Math.sqrt(width * height)
            setScreenSize(size)
            return { width, height, size }
        }

        const resizeCanvas = () => {
            const { width, height } = updateScreenSize()
            canvas.width = width
            canvas.height = height
        }

        const drawShape = (shape: Shape) => {
            ctx.beginPath()
            ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2)

            if (mousePosition) {
                const dx = mousePosition.x - shape.x
                const dy = mousePosition.y - shape.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const maxDistance = 300 // Increased interaction range

                if (distance < maxDistance) {
                    const factor = 1 - distance / maxDistance
                    const gradient = ctx.createRadialGradient(
                        shape.x, shape.y, 0,
                        shape.x, shape.y, shape.radius
                    )
                    const startColor = shape.color
                    const endColor = `rgba(50, 183, 182, ${Math.max(0, Math.min(factor * 0.8, 1))})`
                    gradient.addColorStop(0, startColor)
                    gradient.addColorStop(1, endColor)
                    ctx.fillStyle = gradient
                } else {
                    ctx.fillStyle = shape.color
                }
            } else {
                ctx.fillStyle = shape.color
            }

            ctx.fill()
        }

        const updateShape = (shape: Shape) => {
            if (shape.throwVelocity) {
                shape.x += shape.throwVelocity.x
                shape.y += shape.throwVelocity.y

                // Slow down the throw velocity
                shape.throwVelocity.x *= 0.95
                shape.throwVelocity.y *= 0.95

                // If throw velocity is small enough, reset to original speed
                if (Math.abs(shape.throwVelocity.x) < shape.originalSpeed && Math.abs(shape.throwVelocity.y) < shape.originalSpeed) {
                    shape.vx = Math.sign(shape.throwVelocity.x) * shape.originalSpeed
                    shape.vy = Math.sign(shape.throwVelocity.y) * shape.originalSpeed
                    shape.throwVelocity = null
                }
            } else {
                shape.x += shape.vx
                shape.y += shape.vy
            }

            if (shape.x < -shape.radius) shape.x = canvas.width + shape.radius
            if (shape.x > canvas.width + shape.radius) shape.x = -shape.radius
            if (shape.y < -shape.radius) shape.y = canvas.height + shape.radius
            if (shape.y > canvas.height + shape.radius) shape.y = -shape.radius

            // Mouse interaction
            if (mousePosition) {
                const dx = mousePosition.x - shape.x
                const dy = mousePosition.y - shape.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const mouseSpeed = Math.sqrt(mouseVelocity.x ** 2 + mouseVelocity.y ** 2)

                // Calculate throw threshold based on screen size
                const throwThreshold = screenSize / 1000 // Increased threshold for harder throwing

                if (distance < 300) { // Keep increased interaction range
                    if (mouseSpeed > throwThreshold && distance < 100) { // Only throw when very close and moving fast
                        // Throw the shape away from the mouse
                        const throwSpeed = (mouseSpeed - throwThreshold) * 0.3 // Reduced throw intensity
                        shape.throwVelocity = {
                            x: -dx / distance * throwSpeed,
                            y: -dy / distance * throwSpeed
                        }
                    } else {
                        // Attract the shape to the mouse more gently
                        const attractionStrength = 0.0008 // Reduced attraction strength
                        const attractionFactor = 1 - (distance / 300) // Stronger attraction when closer
                        shape.vx += dx * attractionStrength * attractionFactor
                        shape.vy += dy * attractionStrength * attractionFactor

                        // Limit the maximum speed of attraction
                        const maxSpeed = 3
                        const currentSpeed = Math.sqrt(shape.vx ** 2 + shape.vy ** 2)
                        if (currentSpeed > maxSpeed) {
                            const scale = maxSpeed / currentSpeed
                            shape.vx *= scale
                            shape.vy *= scale
                        }
                    }
                }
            }
        }

        const drawOverlay = () => {
            const gradient = ctx.createLinearGradient(10, 0, canvas.width, canvas.height)
            gradient.addColorStop(0, 'rgba(10, 10, 10, 0.3)')
            gradient.addColorStop(1, 'rgba(20, 20, 20, 0.4)')

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Add subtle frosted lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
            ctx.lineWidth = 1
            for (let i = 0; i < canvas.width; i += 40) {
                ctx.beginPath()
                ctx.moveTo(i, 0)
                ctx.lineTo(i, canvas.height)
                ctx.stroke()
            }
            for (let i = 0; i < canvas.height; i += 40) {
                ctx.beginPath()
                ctx.moveTo(0, i)
                ctx.lineTo(canvas.width, i)
                ctx.stroke()
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            shapes.forEach(drawShape)
            shapes.forEach(updateShape)

            drawOverlay()

            animationFrameId = requestAnimationFrame(animate)
        }

        resizeCanvas()
        animate()

        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [shapes, mousePosition, mouseVelocity, screenSize])

    useEffect(() => {
        const handleGlobalMouseMove = (event: MouseEvent) => {
            const newMousePosition = { x: event.clientX, y: event.clientY }
            setMousePosition(newMousePosition)

            if (prevMousePosition) {
                const dx = newMousePosition.x - prevMousePosition.x
                const dy = newMousePosition.y - prevMousePosition.y
                setMouseVelocity({ x: dx, y: dy })
            }

            setPrevMousePosition(newMousePosition)
        };

        const handleGlobalMouseLeave = () => {
            setMousePosition(null)
            setPrevMousePosition(null)
            setMouseVelocity({ x: 0, y: 0 })
        };

        window.addEventListener('mousemove', handleGlobalMouseMove)
        window.addEventListener('mouseleave', handleGlobalMouseLeave)

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove)
            window.removeEventListener('mouseleave', handleGlobalMouseLeave)
        };
    }, [prevMousePosition])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{
                filter: 'blur(40px)',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(0,0,0,0.7)'
            }}
        />
    )
}

