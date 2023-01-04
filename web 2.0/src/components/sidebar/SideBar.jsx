import React from 'react';
import './SideBar.css';
import { MdOutlineRssFeed } from 'react-icons/md';
import { FiHelpCircle } from 'react-icons/fi';
import Image from '../../assets/person/Image.jpeg';

const SideBar = ({ firstname, lastname }) => {
  return (
    <div className='sidebar'>
        <div className="profile">
            <div className="profile-image-container">
                <img src={Image} alt="" className="profile-image" />
            </div>
            <div className="profile-details">
                <h3>{firstname} {lastname}</h3>
                <h4 className='verified'>Verified</h4>
            </div>
        </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
            <li className="sidebar-list-items">
                <MdOutlineRssFeed className='sidebar-icon'/>
                <span className="sidebar-list-items-text">Feed</span>
            </li>
            <li className="sidebar-list-items">
                <FiHelpCircle className='sidebar-icon'/>
                <span className="sidebar-list-items-text">Questions</span>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
