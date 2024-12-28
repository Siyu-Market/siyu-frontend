import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/siyulogo.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://siyumarket-backend.vercel.app/users/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);
      setLoading(false);

      
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to the server. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1800px] mx-auto px-4">
      <div className="py-0 flex items-center justify-center w-[90vw]">
        <div className="h-[90vh] flex items-center justify-center">
          <div className="w-[400px]">
            <div className="flex items-center mb-[40px]">
              <div className="flex items-center justify-center w-[50px] h-[50px] mr-2 rounded-full shadow-lg bg-white">
                <img src={Logo} alt="logo" className="logo w-[25px] mr-[1px] object-contain" />
              </div>
              <h1 className="text-[30px] font-bold text-[#00214F]">Siyu Market</h1>
            </div>
            <h2 className="mb-[12px] text-[36px] font-semibold">Login</h2>
            <p className="mb-[32px] text-[16px] font-normal">Welcome back! Please enter your details</p>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <h6 className="mb-[6px] text-[14px] font-medium">Email</h6>
              <input
                type="text"
                placeholder="Enter your Email"
                className="loginInput w-full mb-[20px] border rounded-[8px] px-[14px] py-[10px]"
                value={email}
                onChange={handleChange(setEmail)}
                required
              />
              <h6 className="mb-[6px] text-[14px] font-medium">Password</h6>
              <input
                type="password"
                placeholder="Enter your password"
                className="loginInput w-full mb-[24px] border rounded-[8px] px-[14px] py-[10px]"
                value={password}
                onChange={handleChange(setPassword)}
                required
              />
              <button
                disabled={loading}
                className="bg-blue-800 w-full flex items-center text-white rounded-[8px] justify-center py-[10px] mb-[32px]"
              >
                {loading ? 'Loading...' : 'Login'}
              </button>
              <h5 className="text-center">
                Don't have an account?{' '}
                <span className="text-[#0179FE] cursor-pointer" onClick={() => navigate('/signup')}>
                  Sign up
                </span>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
