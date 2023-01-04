import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { TopBar, SideBar, Feed, RightBar } from '../../components';
// import axios from '../../../axios';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
//import { useAuth } from '../../hooks/useAuth.jsx';

// const tk = cookies.get("tk");
// const URL_DASH = '/users/dashboard';
// const URL_POST = '/posts';

// let user;

const DashboarPage = () => {

  // const api = async () => {
  //   try {
  //     const response = await axios.get(URL_DASH, 
  //       {
  //         headers: {
  //           'Authorization': tk
  //         }
  //       });
  //     user = response.data.user;  
      
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // console.log(user);
  // const username = user.username;
  // console.log(username);
  
  // const apiPost = async () => {
    //   try {
      //     const response = await axios.get(URL_POST)
      //     console.log(response);
      //   } catch (err) {
        //     console.log(err);
        //   }
        // }
        
        // api();
  //apiPost();
  

  const user = JSON.parse(localStorage.getItem('user'));
  const { username, firstname, lastname } = user;
  console.log(username);
  console.log(firstname);
  console.log(lastname);
  console.log('------dash-saved-user');  

  return (
    <div>
      <TopBar username={username} />
        <div className="dashboard-container">
            <SideBar firstname={firstname} lastname={lastname} />
            <Feed />
            <RightBar />
        </div>
    </div>
  )
}

export default DashboarPage
