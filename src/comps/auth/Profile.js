import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/form.scss';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

const Profile = () => {
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const initValues = {
    email: currentUser.email,
    password: '',
    confirmPassword: '',
  };
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

      const promises = [];
      if (values.email !== currentUser.email) {
        promises.push(updateEmail(values.email));
      }

      if (values.password) {
        promises.push(updatePassword(values.password));
      }

      await Promise.all(promises);
      setValues(initValues);
      history.push('/');
      toast.success('Account updated successfully!');
      setLoading(false);
    } catch {
      setError('Failed to update account');
      setLoading(false);
    }
  };

  return (
    <div className='signup'>
      <h2>Update Profile</h2>
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
            placeholder='Leave blank to keep the same'
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='confirm-password'>Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={values.confirmPassword}
            placeholder='Leave blank to keep the same'
            onChange={handleChange}
          />
        </div>
        <button className='btn-submit' type='submit' disabled={loading}>
          Update
        </button>
      </form>
      <div className='form-link'>
        <Link to='/'>Cancel</Link>
      </div>
    </div>
  );
};

export default Profile;
