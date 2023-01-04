import React, { useState } from 'react';
import './TopBar.css';
import { HiSearch } from 'react-icons/hi';
import { FaHome, FaEdit } from 'react-icons/fa';
import { BsJournalArrowDown } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from '../../assets/person/Image.jpeg';
import { Link } from 'react-router-dom';

const TopBar = ({ id, username }) => {
    const [open, setOpen] = useState(false);

    const menuHandler = () => setOpen(!open);

  return (
    <div className='topbar-container '>
        <div className="topbar-left">
            <span className="logo">Quester</span>
        </div>
        <div className="topbar-center">
            <div className="searchbar" id={id}>
                <HiSearch className='search-icon'/>
                <input placeholder="Search" className="searchinput" />
            </div>
        </div>
        <div className="topbar-right">
            <div className="topbar-links">
                <div>
                    <FaHome className='r-icon'/>
                    <Link to='/dashboard'><span className="topbar-link">Home</span></Link>
                </div>
                <div>
                    <BsJournalArrowDown className='r-icon'/>
                    <span className="topbar-link">Journal</span>
                </div>
            </div>
            <div className="topbar-icons">
                <img src={Image} alt="" className="topbar-image" />
                <span className='username'>{ username }</span>
                <MdOutlineKeyboardArrowDown onClick={menuHandler} className='arrow' />
                {open && (<div className='drop-down'>
                            <div className='dropdown-text'>
                                <div>
                                    <FaEdit className='edit'/>
                                </div>
                                <Link to='/dashboard/edit'><span>Edit Profile</span></Link>
                            </div>
                            <Link to='/dashboard/verification'><div className='dropdown-text'>Request Verification</div></Link>
                            <div className='dropdown-text'>Log out</div>
                        </div>)}
            </div>
        </div>
    </div>
  )
}

export default TopBar
