import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaCalendarAlt, FaPencilAlt, FaTrash, FaSave, FaPlus } from 'react-icons/fa';
import { useAppContext } from '../contexts/AppContext'
import './globals.css';

const YearListPage = () => {
  const router = useRouter();
  const { years, setYears } = useAppContext();
  const [newYear, setNewYear] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  const addYear = () => {
    if (newYear && !years.includes(newYear)) {
      setYears([...years, newYear]);
      setNewYear('');
    }
  };

  const toggleEditYear = (index) => {
    setIsEditing(isEditing === index ? null : index);
  };

  const saveYear = (index, updatedYear) => {
    const updatedYears = [...years];
    updatedYears[index] = updatedYear;
    setYears(updatedYears);
    setIsEditing(null);
  };

  const deleteYear = (index) => {
    const updatedYears = years.filter((_, i) => i !== index);
    setYears(updatedYears);
  };

  const goToMonthListPage = (year) => {
    router.push(`/months/${year}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => router.push('/HomePage')} className="text-[#b2543d]">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-[#b2543d]">Lista de Anos</h1>
        <button onClick={addYear} className="text-[#b2543d]">
          <FaPlus size={24} />
        </button>
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Adicione um ano"
          value={newYear}
          onChange={(e) => setNewYear(e.target.value)}
          className="w-full p-2 border border-[#b2543d] rounded-md"
        />
      </div>

      <ul className="space-y-4">
        {years.map((year, index) => (
          <li key={index} className="flex items-center justify-between bg-white p-3 border rounded-md">
            <FaCalendarAlt className="text-[#b2543d]" size={20} />
            {isEditing === index ? (
              <input
                type="number"
                value={year}
                onChange={(e) => saveYear(index, e.target.value)}
                className="flex-grow mx-4 p-2 border border-[#b2543d] rounded-md"
              />
            ) : (
              <span
                className="flex-grow text-center cursor-pointer"
                onClick={() => goToMonthListPage(year)}
              >
                {year}
              </span>
            )}
            <div className="flex items-center space-x-2">
              {isEditing === index ? (
                <FaSave
                  className="text-green-500 cursor-pointer"
                  size={20}
                  onClick={() => toggleEditYear(index)}
                />
              ) : (
                <FaPencilAlt
                  className="text-blue-500 cursor-pointer"
                  size={20}
                  onClick={() => toggleEditYear(index)}
                />
              )}
              <FaTrash
                className="text-red-500 cursor-pointer"
                size={20}
                onClick={() => deleteYear(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearListPage;
