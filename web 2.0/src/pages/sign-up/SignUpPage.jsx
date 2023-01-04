import React from 'react';
import { Footer, NavBar, SignUpForm } from '../../components';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <>
      <NavBar name='navbar-props' signup='signup' signin='signin' />
      <div className='form-container'>
        <SignUpForm />
      </div>
      <Footer />
    </>
  )
}

export default SignUpPage;
