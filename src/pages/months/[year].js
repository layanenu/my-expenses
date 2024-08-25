import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaCalendarAlt, FaPencilAlt, FaTrash, FaSave, FaPlus } from 'react-icons/fa';
import { useAppContext } from '../../contexts/AppContext';
import '../globals.css';

const MonthListPage = () => {
  const router = useRouter();
  const { months, setMonths } = useAppContext();
  const [newMonth, setNewMonth] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  const addMonth = () => {
    if (newMonth && !months.includes(newMonth)) {
      setMonths([...months, newMonth]);
      setNewMonth('');
    }
  };

  const toggleEditMonth = (index) => {
    setIsEditing(isEditing === index ? null : index);
  };

  const saveMonth = (index, updatedMonth) => {
    const updatedMonths = [...months];
    updatedMonths[index] = updatedMonth;
    setMonths(updatedMonths);
    setIsEditing(null);
  };

  const deleteMonth = (index) => {
    const updatedMonths = months.filter((_, i) => i !== index);
    setMonths(updatedMonths);
  };

  const goToExpensesPage = (month) => {
    router.push(`/expenses/${month}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => router.push('/YearListPage')} className="text-[#b2543d]">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-[#b2543d]">Lista de Meses</h1>
        <button onClick={addMonth} className="text-[#b2543d]">
          <FaPlus size={24} />
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Adicione um mês"
          value={newMonth}
          onChange={(e) => setNewMonth(e.target.value)}
          className="w-full p-2 border border-[#b2543d] rounded-md"
        />
      </div>

      <ul className="space-y-4">
        {months.map((month, index) => (
          <li key={index} className="flex items-center justify-between bg-white p-3 border rounded-md">
            <FaCalendarAlt className="text-[#b2543d]" size={20} />
            {isEditing === index ? (
              <input
                type="text"
                value={month}
                onChange={(e) => saveMonth(index, e.target.value)}
                className="flex-grow mx-4 p-2 border border-[#b2543d] rounded-md"
              />
            ) : (
              <span
                className="flex-grow text-center cursor-pointer"
                onClick={() => goToExpensesPage(month)}
              >
                {month}
              </span>
            )}
            <div className="flex items-center space-x-2">
              {isEditing === index ? (
                <FaSave
                  className="text-green-500 cursor-pointer"
                  size={20}
                  onClick={() => toggleEditMonth(index)}
                />
              ) : (
                <FaPencilAlt
                  className="text-blue-500 cursor-pointer"
                  size={20}
                  onClick={() => toggleEditMonth(index)}
                />
              )}
              <FaTrash
                className="text-red-500 cursor-pointer"
                size={20}
                onClick={() => deleteMonth(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthListPage;
