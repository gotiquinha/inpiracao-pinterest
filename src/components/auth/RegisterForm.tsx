"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória')
}).required();

type RegisterFormData = yup.InferType<typeof schema>;

export default function RegisterForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      
      await updateProfile(userCredential.user, {
        displayName: data.name
      });

      router.push('/feed');
    } catch (error) {
      console.error('Erro ao registrar:', error);
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
            {...register('name')}
            type="text"
            placeholder="Nome"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

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

        <div>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirmar Senha"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </motion.div>
  );
} 