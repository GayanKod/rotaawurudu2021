import React, { useState } from 'react';
import authSvg from '../../assests/SignUp2.png';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
require("dotenv").config();

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    batch: '',
    faculty: '',
    house: '',
    password1: '',
    password2: '',
    textChange: 'Sign Up'
  });

  const { name, email, batch, faculty, house, password1, password2, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name && email && password1 && batch && faculty && house) {
      if (password1 === password2) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            batch,
            faculty,
            house,
            password: password1
          })
          .then(res => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              batch: '',
              faculty: '',
              house: '',
              password1: '',
              password2: '',
              textChange: 'Submitted'
            });

            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              batch: '',
              faculty: '',
              house: '',
              password1: '',
              password2: '',
              textChange: 'Sign Up'
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error("Passwords don't matches");
      }
    } else {
      toast.error('Please fill all fields');
    }
  };

  return (
    <div className='min-h-screen bg-yellow-100 text-gray-900 flex justify-center'>
      {isAuth() ? <Redirect to='/' /> : null}
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              <center>Sign Up <br /> CAST 4 Online Aurudu</center>
            </h1>

            <form
              className='w-full flex-1 mt-8 text-yellow-800'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-yellow-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white'
                  type='text'
                  placeholder='Name'
                  onChange={handleChange('name')}
                  value={name}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-yellow-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white mt-5'
                  type='email'
                  placeholder='Email'
                  onChange={handleChange('email')}
                  value={email}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-yellow-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white mt-5'
                  type='text'
                  placeholder='Batch'
                  onChange={handleChange('batch')}
                  value={batch}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-yellow-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white mt-5'
                  type='text'
                  placeholder='Faculty'
                  onChange={handleChange('faculty')}
                  value={faculty}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-yellow-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white mt-5'
                  type='text'
                  placeholder='House'
                  onChange={handleChange('house')}
                  value={house}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-yellow-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Password'
                  onChange={handleChange('password1')}
                  value={password1}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-yellow-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange('password2')}
                  value={password2}
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-gray-800 text-gray-100 w-full py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>{textChange}</span>
                </button>
              </div>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-yellow-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Or sign with email
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-yellow-200 text-yellow-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/SignIn'
                  target='_self'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-yellow-800' />
                  <span className='ml-4 text-yellow-800'>Sign In</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='flex-1 bg-yellow-200 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Register;