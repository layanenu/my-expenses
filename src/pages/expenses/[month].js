import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaPencilAlt, FaTrash, FaSave, FaPlus, FaMoneyBillAlt, FaChartLine } from 'react-icons/fa';
import { useAppContext } from '../../contexts/AppContext';
import '../globals.css';

const ExpensesPage = () => {
  const router = useRouter();
  const { totalRevenue, setTotalRevenue, expenses, setExpenses } = useAppContext();
  const [isEditingRevenue, setIsEditingRevenue] = useState(false);
  const [newExpense, setNewExpense] = useState({ description: '', value: '', month: new Date().toLocaleString('default', { month: 'long' }) });
  const [isEditing, setIsEditing] = useState(null);

  const addExpense = () => {
    if (newExpense.description && newExpense.value) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: '', value: '', month: new Date().toLocaleString('default', { month: 'long' }) });
    }
  };

  const toggleEditExpense = (index) => {
    setIsEditing(isEditing === index ? null : index);
  };

  const saveExpense = (index, updatedExpense) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = updatedExpense;
    setExpenses(updatedExpenses);
    setIsEditing(null);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const remainingBalance = totalRevenue
    ? totalRevenue - expenses.reduce((acc, expense) => acc + parseFloat(expense.value || 0), 0)
    : 0;

  const toggleEditRevenue = () => {
    setIsEditingRevenue(!isEditingRevenue);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => router.back()} className="text-[#b2543d]">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-[#b2543d]">Despesas</h1>
        <button
          onClick={() => router.push(`/dashboard/${new Date().toLocaleString('default', { month: 'long' })}`)}
          className="text-[#b2543d]"
          aria-label="Dashboard"
        >
          <FaChartLine size={24} />
        </button>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-bold text-gray-700">Receita Total:</label>
        <div className="flex items-center space-x-2">
          {isEditingRevenue ? (
            <input
              type="number"
              value={totalRevenue}
              onChange={(e) => setTotalRevenue(parseFloat(e.target.value) || 0)}
              className="flex-grow p-2 border border-[#b2543d] rounded-md"
            />
          ) : (
            <p className="flex-grow text-lg">{totalRevenue || "Insira a receita total"}</p>
          )}
          {isEditingRevenue ? (
            <FaSave className="text-green-500 cursor-pointer" size={24} onClick={toggleEditRevenue} />
          ) : (
            <FaPencilAlt className="text-blue-500 cursor-pointer" size={24} onClick={toggleEditRevenue} />
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-bold text-gray-700">Saldo Restante:</label>
        <p className="text-xl text-green-600">{remainingBalance}</p>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-bold text-gray-700">Adicionar Nova Despesa:</label>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Descrição da despesa"
            value={newExpense.description}
            onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
            className="flex-grow p-2 border border-[#b2543d] rounded-md"
          />
          <input
            type="number"
            placeholder="Valor"
            value={newExpense.value}
            onChange={(e) => setNewExpense({ ...newExpense, value: e.target.value })}
            className="w-32 p-2 border border-[#b2543d] rounded-md"
          />
          <button onClick={addExpense} className="text-[#b2543d]">
            <FaPlus size={24} />
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {expenses.map((expense, index) => (
          <li key={index} className="flex items-center justify-between bg-white p-3 border rounded-md">
            <FaMoneyBillAlt className="text-[#b2543d]" size={20} />
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={expense.description}
                  onChange={(e) => saveExpense(index, { ...expense, description: e.target.value })}
                  className="flex-grow mx-2 p-2 border border-[#b2543d] rounded-md"
                />
                <input
                  type="number"
                  value={expense.value}
                  onChange={(e) => saveExpense(index, { ...expense, value: e.target.value })}
                  className="w-32 p-2 ml-2 border border-[#b2543d] rounded-md"
                />
              </>
            ) : (
              <>
                <span className="flex-grow mx-2 text-center">{expense.description}</span>
                <span className="w-32 text-right ml-2">{expense.value}</span>
              </>
            )}
            <div className="flex items-center space-x-2 ml-4">
              {isEditing === index ? (
                <FaSave
                  className="text-green-500 cursor-pointer"
                  size={20}
                  onClick={() => toggleEditExpense(index)}
                />
              ) : (
                <FaPencilAlt
                  className="text-blue-500 cursor-pointer"
                  size={20}
                  onClick={() => toggleEditExpense(index)}
                />
              )}
              <FaTrash
                className="text-red-500 cursor-pointer"
                size={20}
                onClick={() => deleteExpense(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesPage;
