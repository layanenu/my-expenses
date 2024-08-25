import React from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../contexts/AppContext';
import { FaDollarSign, FaArrowLeft } from 'react-icons/fa';
import './globals.css';

const DashboardPage = () => {
  const router = useRouter();
  const { totalRevenue = '', expenses = [] } = useAppContext();

  const revenue = parseFloat(totalRevenue) || 0;
  const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.value) || 0, 0);
  const netBalance = revenue - totalExpenses;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-8">
        <button onClick={() => router.back()} className="text-[#b2543d] mr-4">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-[#b2543d]">Dashboard</h1>
      </div>

      <div className="bg-white p-4 border rounded-md shadow-md mb-8">
        <h2 className="text-xl font-semibold text-[#b2543d] mb-4">Resumo Financeiro</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <div className="text-center mb-4 sm:mb-0 sm:w-1/3">
            <h3 className="text-lg font-medium">Receita Total</h3>
            <p className="text-2xl font-bold text-green-500">
              <FaDollarSign size={24} /> R${revenue.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div className="text-center mb-4 sm:mb-0 sm:w-1/3">
            <h3 className="text-lg font-medium">Despesas Totais</h3>
            <p className="text-2xl font-bold text-red-500">
              <FaDollarSign size={24} /> R${totalExpenses.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div className="text-center sm:w-1/3">
            <h3 className="text-lg font-medium">Saldo</h3>
            <p className={`text-2xl font-bold ${netBalance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              <FaDollarSign size={24} /> R${netBalance.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
