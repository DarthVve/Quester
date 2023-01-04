import React from 'react';
import { EditForm, TopBar } from '../../components';
import './EditPage.css';

const EditPage = () => {
  return (
    <div className='edit-container'>
      <TopBar id='hidden'/>
      <EditForm />
    </div>
  )
}

export default EditPage