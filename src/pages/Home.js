import React from 'react';
import Navbar from '../comps/Navbar';
import homeImg from '../images/home-img.jpg';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <h1>Home</h1>
      <img src={homeImg} alt='' />
    </div>
  );
};

export default Home;
