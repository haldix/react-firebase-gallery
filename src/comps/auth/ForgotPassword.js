import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/form.scss';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await resetPassword(email);
      setEmail('');
      setLoading(false);
      toast.success('Check your inbox for instructions.');
    } catch {
      setError('Failed to reset password.');
      setLoading(false);
    }
  };

  return (
    <div className='signup'>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            required
            onChange={handleChange}
          />
        </div>
        <button className='btn-submit' type='submit' disabled={loading}>
          Reset Password
        </button>
      </form>
      <div className='form-link'>
        <Link to='/login'>Log In</Link>
      </div>
      <div className='form-link'>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
