import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/siyulogo.svg'
import Navbar from './Navbar';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  
  const [telephone, setTelephone] = useState('');

  const [matricNo, setMatricNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)



  const navigate = useNavigate()
  
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  

  return (
    <div className='mx-[119px]'>
        <Navbar />
        <div className='w-[90vw] py-0 flex items-center justify-center'>
            <div className='pt-[30px] flex items-center justify-center'>
                <div className='w-[600px]'>
                    <div className='flex items-center justify-center mb-[20px]'>
                        <div className="flex items-center justify-center w-[50px] h-[50px] mr-2 rounded-full shadow-lg bg-white"><img src={Logo} alt="logo" className='logo w-[25px] mr-[1px] object-contain'/>
                        </div>
                        <h1 className='text-[30px] font-bold text-[#00214F]'>Siyu Market</h1>
                    </div>
                    <h2 className='mb-[12px] text-[36px] font-semibold'>Sign up</h2>
                    <p className='mb-[32px] text-[16px] font-normal'>Please enter your details</p>
                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-between items-center'>
                        <div className='w-[48%]'>
                            <h6 className='mb-[6px] text-[14px] font-medium'>First Name</h6>
                            <input
                            type="text"
                            placeholder='ex: John'
                            className='border rounded-[8px] px-[14px] py-[10px] w-full mb-[20px]'
                            value={firstName}
                            onChange={handleChange(setFirstName)}
                            required
                            />
                        </div>
                        <div className='w-[48%]'>
                            <h6 className='mb-[6px] text-[14px] font-medium'>Last Name</h6>
                            <input
                            type="text"
                            placeholder='ex: Doe'
                            className='border rounded-[8px] px-[14px] py-[10px] w-full mb-[20px]'
                            value={lastName}
                            onChange={handleChange(setLastName)}
                            required
                            />
                        </div>
                        </div>
                        <div className='w-full'>
                        <h6 className='mb-[6px] text-[14px] font-medium'>Address</h6>
                        <input
                            type="text"
                            placeholder='Enter your specific address'
                            className='border rounded-[8px] px-[14px] py-[10px] w-full mb-[20px]'
                            value={address}
                            onChange={handleChange(setAddress)}
                            required
                        />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-[48%]'>
                                <h6 className='mb-[6px] text-[14px] font-medium'>Matric No.</h6>
                                <input
                                type="text"
                                placeholder='ex: 21BB0399405'
                                className='border rounded-[8px] px-[14px] py-[10px] w-full mb-[20px]'
                                value={matricNo}
                                onChange={handleChange(setMatricNo)}
                                required
                                />
                            </div>
                            <div className='w-[48%]'>
                                <h6 className='mb-[6px] text-[14px] font-medium'>Telegram Number</h6>
                                <input
                                type="text"
                                placeholder='ex: 080xxxxxxxx'
                                className='border rounded-[8px] px-[14px] py-[10px] w-full mb-[20px]'
                                value={telephone}
                                onChange={handleChange(setTelephone)}
                                required
                                />
                            </div>
                        </div>
                        <div className='w-full'>
                        <h6 className='mb-[6px] text-[14px] font-medium'>Email</h6>
                        <input
                            type="text"
                            placeholder='Enter your Email'
                            className='border rounded-[8px] px-[14px] py-[10px] w-full mb-[20px]'
                            value={email}
                            onChange={handleChange(setEmail)}
                            required
                        />
                        </div>
                        <div className='w-full'>
                        <h6 className='mb-[6px] text-[14px] font-medium'>Password</h6>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='border rounded-[8px] px-[14px] py-[10px] w-full mb-[20px]'
                            value={password}
                            onChange={handleChange(setPassword)}
                            required
                        />
                        </div>
                        <button className='bg-blue-800 w-full flex items-center text-white rounded-[8px] justify-center py-[10px] mb-[32px]'>
                        {loading? '...loading': 'Sign up'}
                        </button>
                        <h5 className='text-center mb-[20px]'>
                        Don't have an account? <span className='text-[#0179FE] cursor-pointer' onClick={() => navigate('/login')}>Login</span>
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SignUp;
