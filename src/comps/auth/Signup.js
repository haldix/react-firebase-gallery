import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/form.scss';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
const initValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const { signup } = useAuth();
  const [values, setValues] = useState(initValues);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      return toast.error('Passwords do not match.');
    }
    try {
      setError('');
      setLoading(true);
      await signup(values.email, values.password);
      setLoading(false);
      history.push('/');
      toast.success('Account created successfully!');
    } catch {
      setLoading(false);
      setError('Failed to create an account');
    }
  };

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={values.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={values.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='confirm-password'>Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={values.confirmPassword}
            required
            onChange={handleChange}
          />
        </div>
        <button className='btn-submit' type='submit' disabled={loading}>
          Sign Up
        </button>
      </form>
      <div className='form-link'>
        Already have an account? <Link to='/login'>Log in</Link>
      </div>
      <div className='form-link'>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Signup;
