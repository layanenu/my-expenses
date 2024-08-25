import React from 'react';
import './globals.css'
import { useRouter } from 'next/router';
import { FaMoneyBillWave, FaTachometerAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-[#b2543d] mb-12 text-center">Welcome to My Expenses</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <button 
        onClick={() => router.push('/YearListPage')}
        className="flex items-center justify-center p-4 border-2 border-[#dda965] rounded-lg text-[#dda965] bg-white shadow-md hover:bg-[#f5f5f5] transition-colors">
          <FaMoneyBillWave className="mr-2" />
          Despesas
        </button>
        <button 
        onClick={() => router.push('/ProfilePage')}
        className="flex items-center justify-center p-4 border-2 border-[#dda965] rounded-lg text-[#dda965] bg-white shadow-md hover:bg-[#f5f5f5] transition-colors">
          <FaUser className="mr-2" />
          Perfil
        </button>
        <button
          onClick={() => router.push('/login')}
          className="flex items-center justify-center p-4 border-2 border-[#dda965] rounded-lg text-[#dda965] bg-white shadow-md hover:bg-[#f5f5f5] transition-colors"
        >
          <FaSignOutAlt className="mr-2" />
          Sair
        </button>
      </div>
    </div>
  );
};

export default HomePage;
