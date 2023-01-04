import React, { useState, useEffect, Suspense } from 'react';
import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from '../../../axios.js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const tk = cookies.get("tk");
const URL_POST = '/posts';

const Feed = () => {

  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
  
      const response = await axios.get(URL_POST, {
        headers: {
          'Authorization': `Bearer ${tk}`
        }
      })
  
      console.log("Chukwuma", response)
      const postsData = response.data.posts
      setPosts(postsData);  
    }
    catch (error) {
      console.log(error.response.data);
    }
  
  }

  useEffect(() => {
    fetchPost();
    
  }, [])
  console.log("Chukwuma")
  console.log(">>>", posts)

  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share posts={posts} setPosts={setPosts}/>
        {posts.map((post) =>
          <Post
            key={post.id}
            content={post.content}
            username={post.USERS.username}
            time={new Date().getUTCMilliseconds() - new Date(post.createdAt).getUTCMilliseconds()}
          />
        ).reverse()}
       
      </div>
    </div>
  )

}

export default Feed


