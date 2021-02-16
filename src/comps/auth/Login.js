import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/form.scss';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
const initValues = {
  email: '',
  password: '',
};

const Login = () => {
  const { login } = useAuth();
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

    try {
      setError('');
      setLoading(true);
      await login(values.email, values.password);
      setValues(initValues);
      setLoading(false);
      history.push('/');
      toast.success('Logged in successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to log in.');
      setLoading(false);
    }
  };

  return (
    <div className='signup'>
      <h2>Log In</h2>
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
        <button className='btn-submit' type='submit' disabled={loading}>
          Log in
        </button>
      </form>
      <div className='form-link'>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </div>
      <div className='form-link'>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
      <div className='form-link'>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Login;
