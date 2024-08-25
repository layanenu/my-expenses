import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppContext } from './AppContext';
import './globals.css';

const SignupPage = () => {
  const router = useRouter();
  const { setUser } = useAppContext();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password === confirmPassword) {
      setUser({ username, email, password });
      router.push('/HomePage');
    } else {
      alert('As senhas não coincidem!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xs sm:max-w-sm">
        <h1 className="text-3xl font-bold text-[#b2543d] mb-4 text-center">Create new Account</h1>
        <h2 className="text-base sm:text-lg text-gray-600 mb-8 text-center">
          Already Registered?{' '}
          <Link href="/login" className="text-[#b2543d] font-bold">
            Log in here
          </Link>.
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-[#b2543d] rounded-md text-base sm:text-lg"
          placeholder="Email"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-[#b2543d] rounded-md text-base sm:text-lg"
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-[#b2543d] rounded-md text-base sm:text-lg"
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-6 border-2 border-[#b2543d] rounded-md text-base sm:text-lg"
          placeholder="Confirm Password"
        />

        <button
          onClick={handleSignup}
          className="w-full p-3 bg-[#b2543d] text-white rounded-md text-base sm:text-lg font-bold"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
