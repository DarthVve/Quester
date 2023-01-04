import './NavBar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const falseHandler = () => {
        setToggleMenu(false);
    }

    const trueHandler = () => {
        setToggleMenu(true);
    }

  return (
    <div className='app__navbar' id={props.name}>
        <div className='app__navbar-links'>
            <div className='app__navbar-links_logo'>
                {/* <img src={Logo} alt='Quester Logo'/> */}
                <h2>Quester</h2>
            </div>
            <div className='app__navbar-links_container'>
                <Link to='/'><p>Home</p></Link>
                <p><a href='#blog'>Journal</a></p>
            </div>
        </div>
        <div className='app__navbar-sign'>
            <Link to='/signin'><p id={props.signin}>Sign in</p></Link>
            <Link to='/signup'><button type='button' id={props.signup}>Sign up</button></Link>
        </div>
        <div className='app__navbar-menu'>
            {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={falseHandler} />
            : <RiMenu3Line color='#fff' size={27} onClick={trueHandler} />
            }
            {toggleMenu && (
                <div className='app__navbar-menu_container scale-up-center'>
                    <div className='app__navbar-menu_container-links'>
                        <p><a href='#home'>Home</a></p>
                        <p><a href='#blog'>Journal</a></p>
                        <div className='app__navbar-menu_container-links-sign'>
                            <p>Sign in</p>
                            <button type='button'>Sign up</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default NavBar
