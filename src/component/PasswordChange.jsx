import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/siyulogo.svg';

function PasswordChange() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        //I need to remind IBK to work on this part
        `http://localhost:8000/users/auth/complete-reset?token=${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            new_password: newPassword,
            confirm: confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to reset password.');
      }

      const data = await response.json();
      console.log('Password Reset Successfully:', data);

      setSuccessMessage('Your password has been reset successfully.');
      setTimeout(() => navigate('/login'), 3000);
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
            <h2 className="mb-[12px] text-[36px] font-semibold">Reset Password</h2>
            <p className="mb-[20px] text-[16px] font-normal">Enter your new password below</p>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <h6 className="mb-[6px] text-[14px] font-medium">New Password</h6>
              <input
                type="password"
                placeholder="Enter your new password"
                className="loginInput w-full mb-[20px] border rounded-[8px] px-[14px] py-[10px]"
                value={newPassword}
                onChange={handleChange(setNewPassword)}
                required
              />
              <h6 className="mb-[6px] text-[14px] font-medium">Confirm Password</h6>
              <input
                type="password"
                placeholder="Confirm your new password"
                className="loginInput w-full mb-[20px] border rounded-[8px] px-[14px] py-[10px]"
                value={confirmPassword}
                onChange={handleChange(setConfirmPassword)}
                required
              />
              <button
                disabled={loading}
                className="bg-blue-800 w-full flex items-center text-white rounded-[8px] justify-center py-[10px] mb-[32px]"
              >
                {loading ? 'Loading...' : 'Reset Password'}
              </button>
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

export default PasswordChange;
