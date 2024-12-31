import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/siyulogo.svg';

function VerifyEmail() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('https://siyumarket-backend.vercel.app/users/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to reset password.');
      }

      const data = await response.json();
      console.log('Password Reset Successfully:', data);

      setSuccessMessage('A reset password link has been sent to your email.');
    } catch (err) {
      setError(err.message);
    } finally {
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
            <h2 className="mb-[12px] text-[36px] font-semibold">Password Reset</h2>
            <p className="mb-[20px] text-[16px] font-normal">Enter your email to reset your password</p>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
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
              <button
                disabled={loading}
                className="bg-blue-800 w-full flex items-center text-white rounded-[8px] justify-center py-[10px] mb-[32px]"
              >
                {loading ? 'Loading...' : 'Reset Password'}
              </button>
              <h5 className="text-center">
                Don't have an account?{' '}
                <span className="text-[#0179FE] cursor-pointer" onClick={() => navigate('/signup')}>
                  Sign up
                </span>
              </h5>
              <h5 className="text-center">
                Back to{' '}
                <span className="text-[#0179FE] cursor-pointer" onClick={() => navigate('/login')}>
                  Login
                </span>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
