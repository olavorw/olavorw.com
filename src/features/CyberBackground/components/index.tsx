/*
Copyright 2024 Olav "Olavorw" Sharma (https://olavorw.com)

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

// I'm proud of this one. It's a dynamic background that looks like a cyberpunk city. It's a bit heavy on the CPU, but it's worth it.

'use client'

import { useEffect, useRef, useState, useMemo, useCallback } from 'react'

interface Node {
    x: number
    y: number
    connections: number[]
}

const MIN_GRID_SIZE = 80
const MAX_GRID_SIZE = 120
const NODE_RADIUS = 2
const CONNECTION_DISTANCE_FACTOR = 1.5
const INTERACTION_RADIUS = 250

export default function CyberBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const blurRef = useRef<HTMLDivElement>(null)
    const animationFrameId = useRef<number | null>(null)
    const mousePosition = useRef<{ x: number; y: number } | null>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const smoothMousePositionRef = useRef<{ x: number; y: number } | null>(null);

    const calculateNodes = useCallback((width: number, height: number) => {
        const gridSize = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE, Math.floor(Math.sqrt(width * height) / 20)))
        const connectionDistance = gridSize * CONNECTION_DISTANCE_FACTOR

        const cols = Math.ceil(width / gridSize)
        const rows = Math.ceil(height / gridSize)
        const newNodes: Node[] = []

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                newNodes.push({
                    x: i * gridSize,
                    y: j * gridSize,
                    connections: [],
                })
            }
        }

        // Calculate connections
        for (let i = 0; i < newNodes.length; i++) {
            for (let j = i + 1; j < newNodes.length; j++) {
                const dx = newNodes[i].x - newNodes[j].x
                const dy = newNodes[i].y - newNodes[j].y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance <= connectionDistance) {
                    newNodes[i].connections.push(j)
                    newNodes[j].connections.push(i)
                }
            }
        }

        return newNodes
    }, [])

    const nodes = useMemo(() => calculateNodes(dimensions.width, dimensions.height), [dimensions, calculateNodes])

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight })
        }

        handleResize() // Set initial dimensions
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = dimensions.width
            canvas.height = dimensions.height
        }

        const drawNode = (node: Node, intensity: number, distance: number) => {
            ctx.beginPath()
            ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2)
            const alpha = Math.max(0, Math.min(1, 1 - distance / INTERACTION_RADIUS))
            ctx.fillStyle = `rgba(103, 23, 205, ${(0.3 + intensity * 0.7) * alpha})`
            ctx.fill()
        }

        const drawConnection = (node1: Node, node2: Node, intensity: number, distance: number) => {
            ctx.beginPath()
            ctx.moveTo(node1.x, node1.y)
            ctx.lineTo(node2.x, node2.y)
            const alpha = Math.max(0, Math.min(1, 1 - distance / INTERACTION_RADIUS))
            ctx.strokeStyle = `rgba(40, 113, 250, ${intensity * 0.5 * alpha})`
            ctx.stroke()
        }

        let time = 0
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            time += 0.01

            // Smooth mouse position update
            if (mousePosition.current) {
                const targetX = mousePosition.current.x;
                const targetY = mousePosition.current.y;
                if (!smoothMousePositionRef.current) {
                    smoothMousePositionRef.current = { x: targetX, y: targetY };
                } else {
                    const newX = smoothMousePositionRef.current.x + (targetX - smoothMousePositionRef.current.x) * 0.1;
                    const newY = smoothMousePositionRef.current.y + (targetY - smoothMousePositionRef.current.y) * 0.1;
                    if (Math.abs(newX - smoothMousePositionRef.current.x) > 0.1 || Math.abs(newY - smoothMousePositionRef.current.y) > 0.1) {
                        smoothMousePositionRef.current = { x: newX, y: newY };
                    }
                }
            }

            nodes.forEach((node, index) => {
                const intensity = (Math.sin(time + index * 0.1) + 1) / 2
                const distance = smoothMousePositionRef.current
                    ? Math.sqrt((node.x - smoothMousePositionRef.current.x) ** 2 + (node.y - smoothMousePositionRef.current.y) ** 2)
                    : Infinity

                node.connections.forEach(connectionIndex => {
                    drawConnection(node, nodes[connectionIndex], intensity, distance)
                })

                drawNode(node, intensity, distance)
            })

            // Update blur div position
            if (blurRef.current && smoothMousePositionRef.current) {
                blurRef.current.style.transform = `translate(${smoothMousePositionRef.current.x - INTERACTION_RADIUS}px, ${smoothMousePositionRef.current.y - INTERACTION_RADIUS}px)`
            }

            animationFrameId.current = requestAnimationFrame(animate)
        }

        resizeCanvas()
        animate()

        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current = { x: event.clientX, y: event.clientY }
        }

        const handleMouseLeave = () => {
            mousePosition.current = null;
            smoothMousePositionRef.current = null;
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [nodes, dimensions])

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{
                    backgroundColor: 'rgba(5, 5, 5, 0.9)',
                }}
            />
            <div
                ref={blurRef}
                className="fixed pointer-events-none"
                style={{
                    width: `${INTERACTION_RADIUS * 2}px`,
                    height: `${INTERACTION_RADIUS * 2}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(72, 68, 228, 0.15)',
                    filter: 'blur(100px)',
                    transition: 'transform 0.1s ease-out',
                }}
            />
        </>
    )
}

