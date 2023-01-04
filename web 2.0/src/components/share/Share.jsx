import React, { useRef, useEffect, useState } from 'react';
import './Share.css';
import axios from '../../../axios.js';
import Image from '../../assets/person/Image.jpeg';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const tk = cookies.get("tk");
const URL_POST = '/posts/create';


const Share = () => { 
    const userRef = useRef();

    const [content, setContent] = useState('');

    const apiPost = async () => {
        try {
        const response = await axios.post(URL_POST, {content}, {
            headers: {
                'Authorization': `Bearer ${tk}`
            }
        })
        } catch (err) {
        console.log(err);
        }
    }

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const postHandler = (e) => {
        setContent(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        apiPost();
        setContent('');

    }

  return (
      <div className='share'>
        <form onSubmit={submitHandler} className="share-wrapper">
            <div className="share-top">
                <img src={Image} alt="user image" className="topbar-image share-profile-picture" />
                
                <input 
                    type='text'
                    ref={userRef}
                    name='content'
                    value={content}
                    onChange={postHandler}
                    placeholder='Ask a question' 
                    className="share-input"
                />
            </div>
            <hr className="share-hr" />
            <button className="ask-button">Ask</button>
        </form>        
   
    </div>
  )
}

export default Share
