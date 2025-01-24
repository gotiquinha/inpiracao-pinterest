"use client";

import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Criar uma conta
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
} 