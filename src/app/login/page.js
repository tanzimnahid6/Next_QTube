'use client'
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Your login logic goes here
    // For simplicity, let's just log the email and password for this example
    console.log('Login attempt with Email:', email, 'Password:', password);

    // Clear previous errors
    setError('');
  };

  return (
    <div className="flex h-[calc(100vh_-_10rem)] bg-gray-200">
      <div className="m-auto p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
