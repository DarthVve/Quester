import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../../axios.js';
import './SignInForm.css';
import Cookies from 'universal-cookie';
import { useAuth } from "../../hooks/useAuth";

const cookies = new Cookies();

const SIGNIN_URL = '/users/login';

const SignInForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log("---- location", location);
    const { login, role, loggedIn } = useAuth();

    const userRef = useRef();
    // const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        console.log("--- initial state", {
          role,
          loggedIn,
        });
      }, []);

      useEffect(() => {
        if (loggedIn) {
            console.log("--- user loged in", {
            role,
            loggedIn,
          });
          navigate("/dashboard", { replace: true });
        }
      }, [loggedIn]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.email) {
            errors.email = 'Email is required!';
        } else if(!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!';
        }

        if(!values.password) {
            errors.password = 'Password is required!';
        } else if(values.password.length < 5) {
            errors.password = 'Password must be more than 4 characters!';
        } else if(values.password.length > 15) {
            errors.password = 'Password must not exceed more than  10 characters !';
        }

        return errors;
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormErrors(validate({email, password}));    

        const data = {email, password};

        try {
            const response = await axios.post(SIGNIN_URL, data, {
                    headers: { 'Content-Type': 'Application/json' }
                });
        
            const {token, user} = response.data;
            const {id} = user;
                
            cookies.set('tk', token)
            cookies.set('id', id)

            // setEmail('');
            // setPassword('');
            
            localStorage.setItem('user', JSON.stringify(user));

            login(id, "regular");
            console.log('----end');
            
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div className='base-container'>
            <img src='https://signup.com/mobileweb/2.0/images/build/mobile-organizers.png' className='signin-image' alt='user logo'/>
            <div className="header">
                <h1>Sign in</h1>
            </div>
        <form onSubmit={handleSubmit}>
            <div className="content">
                    <input 
                        type="email"
                        id='email'
                        ref={userRef}
                        autoComplete='off'
                        onChange={handleEmail}
                        value={email} 
                        className='field' 
                        name="email" 
                        placeholder="Email" 
                        required
                    />
                    <p>{formErrors.email}</p>

                    <input 
                        type="password" 
                        id='password'
                        onChange={handlePassword}
                        className='field' 
                        value={password}
                        name="password" 
                        placeholder="Password" 
                        required
                    />
                    <p>{formErrors.password}</p>
            </div>
            <div className="footer">
                <button type='button' className='btn' onClick={handleSubmit}>
                    Sign in
                </button>
            </div>
            <hr />
            <p className='account'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </form>
    </div>
  )
}

export default SignInForm
