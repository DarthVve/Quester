import React from 'react';
import './SignInPage.css';
import { Footer, NavBar, SignInForm } from '../../components';

const SignInPage = () => {
  return (
    <div className='signin-container'>
        <NavBar name='navbar-props' signin='signin2' />
        <SignInForm />
        <Footer />
    </div>
  )
}

export default SignInPage;
