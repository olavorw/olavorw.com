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

'use client';

import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormStatus } from 'react-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { sendEmail } from '@/utils/send-email';
import { Field, Label, Switch } from '@headlessui/react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Mail,
  MessageSquare,
  Send,
  User,
  XCircle,
} from 'lucide-react';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

const baseClasses = 'transition-all duration-300 ease-in-out';
const hoverClasses = 'hover:scale-105 hover:shadow-glow';

const glowStyle = {
  textShadow:
    '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)',
};

const inputClasses = `${baseClasses} block w-full rounded-md bg-slate-500/5 px-4 py-3 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#6717cd] hover:outline-[#2871fa]`;

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();
  const [agreed, setAgreed] = useState(false);
  const { pending } = useFormStatus();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(formRef, { once: true, margin: '-100px' });

  const watchFields = watch();

  const onSubmit = async (data: FormData) => {
    if (agreed) {
      setIsEmailSent(false);
      setEmailError(null);
      const success = await sendEmail(data);
      if (success) {
        setIsEmailSent(true);
        reset();
        setAgreed(false);
      } else {
        setEmailError('Failed to send email. Please try again later.');
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: '0 0 15px rgba(103, 23, 205, 0.3)' },
    blur: { scale: 1, boxShadow: 'none' },
  };

  return (
    <motion.div
      className="relative isolate overflow-hidden py-8 sm:py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 opacity-20" />
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-xl border-white/5 border sm:rounded-3xl px-8 py-10"
        style={{
          background:
            'linear-gradient(to right, rgba(103, 23, 205, 0.1), rgba(40, 113, 250, 0.1))',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        whileHover={{
          scale: 1.02,
          boxShadow: '0 0 20px rgba(103, 23, 205, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {[
            { name: 'firstName', label: 'First name', icon: User, span: 1 },
            { name: 'lastName', label: 'Last name', icon: User, span: 1 },
            { name: 'email', label: 'Email', icon: Mail, span: 2 },
            {
              name: 'company',
              label: 'Organization',
              icon: Briefcase,
              span: 2,
            },
            { name: 'message', label: 'Message', icon: MessageSquare, span: 2 },
          ].map((field) => (
            <motion.div
              key={field.name}
              className={`relative ${field.span === 2 ? 'sm:col-span-2' : ''}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-semibold text-white mb-2 ml-1"
              >
                {field.label}
              </label>
              <motion.div
                className="relative"
                initial="blur"
                whileFocus="focus"
                animate={
                  watchFields[field.name as keyof FormData] ? 'focus' : 'blur'
                }
                variants={inputVariants}
              >
                <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                {field.name === 'message' ? (
                  <textarea
                    id={field.name}
                    rows={4}
                    className={`${inputClasses} pl-10`}
                    {...register(field.name as keyof FormData, {
                      required: true,
                    })}
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.name === 'email' ? 'email' : 'text'}
                    autoComplete={
                      field.name === 'email'
                        ? 'email'
                        : field.name === 'company'
                          ? 'organization'
                          : `${field.name === 'firstName' ? 'given-name' : 'family-name'}`
                    }
                    className={`${inputClasses} pl-10`}
                    {...register(field.name as keyof FormData, {
                      required: field.name !== 'company',
                    })}
                  />
                )}
              </motion.div>
              <AnimatePresence>
                {errors[field.name as keyof FormData] && (
                  <motion.p
                    className="mt-2 text-sm text-red-500 ml-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {field.label} is required
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <Field className="flex gap-x-4 sm:col-span-2 items-center">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={`${baseClasses} group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6717cd] focus:ring-offset-2 ${agreed ? 'bg-gradient-to-r from-[#6717cd] to-[#2871fa]' : 'bg-gray-200'}`}
              >
                <span className="sr-only">Agree to policies</span>
                <motion.span
                  aria-hidden="true"
                  className={`${baseClasses} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  animate={{ x: agreed ? 20 : 0 }}
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-300">
              By selecting this, you agree to our{' '}
              <a
                href="https://olavorw.com/legal/policies/privacy"
                className={`${baseClasses} ${hoverClasses} font-semibold text-transparent bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text`}
                style={glowStyle}
              >
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <motion.div
          className="mt-10"
          whileHover={!agreed || pending ? {} : { scale: 1.05 }}
          whileTap={!agreed || pending ? {} : { scale: 0.95 }}
        >
          <button
            type="submit"
            disabled={!agreed || pending}
            className={`${baseClasses} group relative w-full overflow-hidden rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6717cd] disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <motion.span
              className={`${baseClasses} absolute inset-0 bg-gradient-to-r from-[#6717cd] to-[#2871fa]`}
              initial={{ x: '100%' }}
              animate={{ x: agreed && !pending ? '0%' : '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center justify-center">
              {pending ? 'Sending...' : "Let's talk"}
              <motion.span
                className="ml-2 flex items-center"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {pending ? (
                  <Send className="h-4 w-4 animate-pulse" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </motion.span>
            </span>
          </button>
        </motion.div>
        <AnimatePresence>
          {isEmailSent && (
            <motion.p
              className="mt-4 text-sm text-green-500 text-center flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Thank you for your message. We&apos;ll be in touch soon!
            </motion.p>
          )}
          {emailError && (
            <motion.p
              className="mt-4 text-sm text-red-500 text-center flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <XCircle className="mr-2 h-4 w-4" />
              {emailError}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
