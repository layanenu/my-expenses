import React from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from './AppContext';
import { FaArrowLeft, FaPencilAlt, FaSave } from 'react-icons/fa';
import './globals.css';

const ProfilePage = () => {
  const router = useRouter();
  const { user, setUser } = useAppContext();

  const [isEditingUsername, setIsEditingUsername] = React.useState(false);
  const [isEditingEmail, setIsEditingEmail] = React.useState(false);
  const [isEditingPassword, setIsEditingPassword] = React.useState(false);

  const handleSave = (field) => {
    if (field === 'username') setIsEditingUsername(false);
    if (field === 'email') setIsEditingEmail(false);
    if (field === 'password') setIsEditingPassword(false);
    alert('Dados salvos com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => router.push('/HomePage')} className="text-[#b2543d]">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-[#b2543d]">Perfil</h1>
        <div></div>
      </div>

      <div className="mb-6">
        <label className="block text-base sm:text-lg text-gray-700 mb-2">Nome de usuário</label>
        <div className="flex items-center">
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="cruelladevil"
            className="w-full p-3 border-2 border-[#dda965] rounded-md text-base sm:text-lg"
            readOnly={!isEditingUsername}
          />
          <FaPencilAlt
            className="ml-2 text-blue-500 cursor-pointer"
            onClick={() => setIsEditingUsername(true)}
          />
          {isEditingUsername && (
            <FaSave
              className="ml-2 text-green-500 cursor-pointer"
              onClick={() => handleSave('username')}
            />
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-base sm:text-lg text-gray-700 mb-2">Email</label>
        <div className="flex items-center">
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="cruella@gmail.com"
            className="w-full p-3 border-2 border-[#dda965] rounded-md text-base sm:text-lg"
            readOnly={!isEditingEmail}
          />
          <FaPencilAlt
            className="ml-2 text-blue-500 cursor-pointer"
            onClick={() => setIsEditingEmail(true)}
          />
          {isEditingEmail && (
            <FaSave
              className="ml-2 text-green-500 cursor-pointer"
              onClick={() => handleSave('email')}
            />
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-base sm:text-lg text-gray-700 mb-2">Senha</label>
        <div className="flex items-center">
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="********"
            className="w-full p-3 border-2 border-[#dda965] rounded-md text-base sm:text-lg"
            readOnly={!isEditingPassword}
          />
          <FaPencilAlt
            className="ml-2 text-blue-500 cursor-pointer"
            onClick={() => setIsEditingPassword(true)}
          />
          {isEditingPassword && (
            <FaSave
              className="ml-2 text-green-500 cursor-pointer"
              onClick={() => handleSave('password')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
