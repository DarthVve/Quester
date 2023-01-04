import React, { useRef, useState, useEffect } from 'react';
import './EditForm.css';

const UPDATE_URL = '/update';

const EditForm = () => {
  const userRef = useRef();
    // const errRef = useRef();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(firstname, lastname, email, username, phonenumber);

        try {
            // const response = await axios.post(SIGNUP_URL, 
            //     JSON.stringify({user, pwd}), 
            //     {
            //         headers: { 'Content-Type': 'Application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            
            setFirstname('');
            setLastname('');
            setEmail('');
            setUsername('');
            setPhonenumber('');
        
            // setSuccess(true)
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className='editform-container'>
            <hr />
            <div className="edit-header">
                <h1>Edit Profile</h1>
            </div>
        <form onSubmit={handleSubmit}>
            <div className="edit-content">
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
            </div>
            <div className="edit-footer">
                <button type='button' className='btn' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <hr />
        </form>
    </div>
  )
}

export default EditForm
