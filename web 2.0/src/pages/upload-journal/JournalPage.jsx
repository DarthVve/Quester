import React from 'react';
import './JournalPage.css';

const JournalPage = () => {
  return (
    <div>
      <form>
        <input 
            type="text" 
            value={description}
            onChange={descriptionHandler}
            placeholder='Enter description'
            />
        <input 
            type="text" 
            value={title}
            onChange={titleHandler}
            placeholder='Enter title'
            />
        <input 
            type="file" 
            value={title}
            onChange={titleHandler}
            placeholder='Enter title'
            />
      </form>
    </div>
  )
}

export default JournalPage
