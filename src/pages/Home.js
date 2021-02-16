import React from 'react';
import Navbar from '../comps/Navbar';
import homeImg from '../images/home-img.jpg';
import '../styles/Home.scss';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className='home'>
      <Navbar />
      <h1>Home</h1>
      <h2>User: {currentUser?.email}</h2>
      <img src={homeImg} alt='' />
    </div>
  );
};

export default Home;
