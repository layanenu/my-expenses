import React from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../AppContext';
import '../globals.css';

const MonthlyDashboard = () => {
  const router = useRouter();
  const { month } = router.query;
  const { totalRevenue = '', expenses = [] } = useAppContext();

  const revenue = parseFloat(totalRevenue) || 0;
  const monthlyExpenses = expenses.filter(expense => expense.month === month);
  const totalExpenses = monthlyExpenses.reduce((acc, expense) => acc + parseFloat(expense.value) || 0, 0);
  const netBalance = revenue - totalExpenses;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-8">
        <button onClick={() => router.back()} className="text-[#b2543d] mr-4">
          &larr; 
        </button>
        <h1 className="text-3xl font-bold text-[#b2543d]">Dashboard</h1>
      </div>

      <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-[#b2543d] mb-6">Resumo Financeiro</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-6">
          <div className="text-center mb-4 sm:mb-0 sm:w-1/3">
            <h3 className="text-xl font-medium text-gray-700">Receita Total</h3>
            <p className="text-3xl font-bold text-green-600">
              R${revenue.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div className="text-center mb-4 sm:mb-0 sm:w-1/3">
            <h3 className="text-xl font-medium text-gray-700">Despesas Totais</h3>
            <p className="text-3xl font-bold text-red-600">
              R${totalExpenses.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div className="text-center sm:w-1/3">
            <h3 className="text-xl font-medium text-gray-700">Saldo</h3>
            <p className={`text-3xl font-bold ${netBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              R${netBalance.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyDashboard;
