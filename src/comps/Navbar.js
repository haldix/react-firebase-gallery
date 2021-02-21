import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/Navbar.scss';

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
          <NavLink exact to='/' activeClassName='selected'>
            Home
          </NavLink>
        </li>
        {!currentUser && (
          <>
            <li>
              <NavLink exact to='/signup' activeClassName='selected'>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' activeClassName='selected'>
                Log In
              </NavLink>
            </li>
          </>
        )}
        {currentUser && (
          <>
            <li>
              <NavLink exact to='/gallery' activeClassName='selected'>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/profile' activeClassName='selected'>
                Profile
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
