import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/siyulogo.svg';
import { useUser } from '../context/Usercontext';

function PasswordChange() {
  const { user } = useUser();
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const token = user ? user.data.access_token : null;

  if (!token) {
    navigate('/login');
    console.log('user: ', user);
  }

  
  const validatePassword = (password) => {
    
    const minLength = 8;
    if (password.length < minLength) {
      return 'Password must be at least 8 characters long';
    }

    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase) {
      return 'Password must contain at least one uppercase letter';
    }

    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase) {
      return 'Password must contain at least one lowercase letter';
    }

    const hasNumber = /[0-9]/.test(password);
    if (!hasNumber) {
      return 'Password must contain at least one number';
    }
    return true;
  }

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    
    const passwordValidation = validatePassword(newPassword);
    if (passwordValidation !== true) {
      setError(passwordValidation);
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'https://siyumarket-backend.vercel.app/users/auth/change-password',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword,
            confirm: confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to change password.');
      }

      const data = await response.json();
      console.log('Password Changed Successfully:', data);

      setSuccessMessage('Your password has been changed successfully.');
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
              <h6 className="mb-[6px] text-[14px] font-medium">Old Password</h6>
              <input
                type="password"
                placeholder="Enter your Old password"
                className="loginInput w-full mb-[20px] border rounded-[8px] px-[14px] py-[10px]"
                value={oldPassword}
                onChange={handleChange(setOldPassword)}
                required
              />
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
                <span className="text-[#0179FE] cursor-pointer" onClick={() => navigate('/')}>
                  Home
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
