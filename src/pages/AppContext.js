import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState({ username: '', email: '', password: '' });

  return (
    <AppContext.Provider
      value={{
        years,
        setYears,
        months,
        setMonths,
        totalRevenue,
        setTotalRevenue,
        expenses,
        setExpenses,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
