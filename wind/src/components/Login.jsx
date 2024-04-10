import React, { useState } from 'react'
import Logo from './assets/Neon Logo.png'

export default function Login({ onLogin }) {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleLogin = (e) => {
  e.preventDefault();

  if (email === 'admin@gmail.com' && password === 'admin123') {
    onLogin();
  } else {
    setError('Incorrect Password or email. Please try again');
  }
}
  return (
    <div className='relative w-full h-screen'>

      <div className='flex justify-center flex-col items-center h-full px-6 py-12'>
        <form className='max-w-[500px] w-full max-h-[600px] mx-auto bg-white border shadow-lg rounded-md pt-[35px] shadow-gray-400 p-14' onSubmit={handleLogin}>

          <img src={Logo} alt='Neon Logo' className='justify-center mx-auto w-[130px]' />
          <div>
            <h1 className="justify-center text-center text-2xl font-bold">
            Neon Pad
            </h1>
          </div>

          <div className='mt-12 text-lg'>
            <label>Email:</label>
            <input 
            type='text'
            placeholder='neon@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='block w-full px-4 mt-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50' 
            />
          </div>

          <div className='mt-8 text-lg'>
            <label>Password:</label>
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='block w-full px-4 py-2 mt-2 mb-6 placeholder-gray-400 text-gray-700 bg-white rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50'
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <button
          type='submit'
          className='w-full mt-4 px-4 py-2 bg-blue-900 text-white text-lg rounded-md hover:bg-blue-950 focus:outline-none focus:bg-blue-700'
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};
