import React, { useRef, useState, useEffect } from 'react';
import '../form.scss';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Signup = () => {
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      console.log('Mismatch pws');
      return setError('Passwords do not match.');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      formRef.current.reset();
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' ref={emailRef} required />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' ref={passwordRef} required />
        </div>
        <div className='input-group'>
          <label htmlFor='confirm-password'>Password</label>
          <input type='password' ref={confirmPasswordRef} required />
        </div>
        <button className='btn-submit' type='submit' disabled={loading}>
          Sign Up
        </button>
      </form>
      <div>Already have an account? Log in</div>
    </div>
  );
};

export default Signup;
