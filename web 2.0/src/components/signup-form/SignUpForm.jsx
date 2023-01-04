import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../axios.js';
import './SignUpForm.css'

const SIGNUP_URL = '/users/register';

const SignUpForm = () => {
    const navigate = useNavigate();

    const userRef = useRef();
    // const errRef = useRef();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    // const [errMsg, setErrMsg] = useState(''); 

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {
    //     setErrMsg(''); 
    // }, [firstname, lastname, email, username, phonenumber, password, confirmpassword])

    const firstnameHandler = (e) => {
        setFirstname(e.target.value);
    }

    const lastnameHandler = (e) => {
        setLastname(e.target.value);
    }
    
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }

    const phonenumberHandler = (e) => {
        setPhonenumber(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const confirmpasswordHandler = (e) => {
        setConfirm_password(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {firstname, lastname, email, username, phonenumber, password, confirm_password};

        try {
            const response = await axios.post(SIGNUP_URL, data, 
                {
                    headers: { 'Content-Type': 'Application/json' }
                }
            )
            console.log(response);
                if (response.status === 201) {
                navigate('/signin')
                }
            
        } catch (err) {
            console.log(err);
        }
            // setFirstname('');
            // setLastname('');
            // setEmail('');
            // setUsername('');
            // setPhonenumber('');
            // setPassword('');
            // setConfirm_password('');

            console.log('---submit clicked' + data);
    }

  return (
    <div className='base-container'>
            <img src='https://signup.com/mobileweb/2.0/images/build/mobile-organizers.png'/>
            <div className="header">
                <h1>Sign up</h1>
            </div>
        <form onSubmit={handleSubmit}>
            <div className="content">
                    <input 
                        type="text" 
                        id='firstname'
                        ref={userRef}
                        onChange={firstnameHandler}
                        value={firstname}
                        className='field' 
                        placeholder="First Name" 
                        required
                    />
                   
                    <input 
                        type="text" 
                        id='lastname'
                        ref={userRef}
                        onChange={lastnameHandler}
                        value={lastname}
                        className='field' 
                        name="lastname" 
                        placeholder="Last Name" 
                        required
                    />

                    <input 
                        type="email" 
                        id='email'
                        ref={userRef}
                        onChange={emailHandler}
                        value={email}
                        className='field'
                        name="email" 
                        placeholder="Email" 
                        required
                    />

                    <input 
                        type="text" 
                        id='username'
                        ref={userRef}
                        onChange={usernameHandler}
                        value={username}
                        className='field'
                        name="username" 
                        placeholder="Username"
                        required 
                    />

                    <input 
                        type="text" 
                        id='phonenumber'
                        ref={userRef}
                        onChange={phonenumberHandler}
                        value={phonenumber}
                        className='field'
                        name="phonenumber" 
                        placeholder="Phone Number" 
                        required
                    />
               
                
                    <input 
                        type="password" 
                        id='password'
                        ref={userRef}
                        onChange={passwordHandler}
                        value={password}
                        className='field'
                        name="password" 
                        placeholder="Password" 
                        required
                    />

                    <input 
                        type="password" 
                        id='confirmpassword'
                        ref={userRef}
                        onChange={confirmpasswordHandler}
                        value={confirm_password}
                        className='field'
                        name="confirm_password" 
                        placeholder="Confirm Password" 
                        required
                    />
               
                <p className='agreement'><span><input type='checkbox' /></span> I agree to the terms of services</p>
            </div>
            <div className="footer">
                <button type='button' className='btn' onClick={handleSubmit}>
                    Sign up
                </button>
            </div>
            <hr />
            <p className='account'>Do you have an account? <Link to='/signin'>Signin</Link></p>
        </form>
    </div>
  )
}

export default SignUpForm
