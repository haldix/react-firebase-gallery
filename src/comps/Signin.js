import React, { useRef } from 'react';
import '../form.scss';

const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <div className='signup'>
      <h2>Sign In</h2>
      <form>
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
        <button className='btn-submit' type='submit'>
          Sign In
        </button>
      </form>
      <div>Already have an account? Log in</div>
    </div>
  );
};

export default Signin;
