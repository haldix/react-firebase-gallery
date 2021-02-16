import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/navbar.scss';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, seterror] = useState();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  async function handleLogout() {
    if (!currentUser) return;
    seterror('');
    try {
      await logout();
      history.push('/login');
      toast.success('Logged Out.');
    } catch {
      seterror('Failed tolog out.');
    }
  }
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {!currentUser && (
          <>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/login'>Log In</Link>
            </li>
          </>
        )}
        {currentUser && (
          <>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
