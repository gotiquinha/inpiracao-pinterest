"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
}).required();

type LoginFormData = yup.InferType<typeof schema>;

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push('/feed');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('password')}
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Entrar
        </button>
      </form>
    </motion.div>
  );
} 