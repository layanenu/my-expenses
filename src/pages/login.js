import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import './globals.css'

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xs sm:max-w-sm">
        <h1 className="text-3xl font-bold text-[#b2543d] mb-4 text-center lowercase">minhas despesas</h1>
        <h2 className="text-base sm:text-lg text-[#3b3a38] mb-8 text-center">
          Entre para continuar
        </h2>

        <input
          type="text"
          className="w-full p-3 mb-4 border-2 border-[#dda965] rounded-md text-base sm:text-lg"
          placeholder="Nome de usuário"
        />
        <input
          type="password"
          className="w-full p-3 mb-6 border-2 border-[#dda965] rounded-md text-base sm:text-lg"
          placeholder="Senha"
        />

        <button
          onClick={() => router.push('/HomePage')}
          className="w-full p-3 bg-[#dda965] text-white rounded-md text-base sm:text-lg font-bold"
        >
          ENTRAR
        </button>

        <p className="text-center mt-4">
          <Link href="/signup" className="text-[#3b3a38]">
            Crie uma conta aqui
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
