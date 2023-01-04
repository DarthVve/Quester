import React from 'react';
import { TopBar, VerificationForm } from '../../components';
import './VerificationPage.css';

const VerificationPage = () => {
  return (
    <div className='verification'>
      <TopBar id='verify-hide'/>
      <div className="form-container">
        <VerificationForm />
      </div>
    </div>
  )
}

export default VerificationPage
