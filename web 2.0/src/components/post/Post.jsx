import React, { useState } from 'react';
import './Post.css';
import Image from '../../assets/person/Image.jpeg';
import { FiMoreVertical } from 'react-icons/fi';
import Like from '../../assets/Like.png';
import Heart from '../../assets/Heart.png';
import { BsReplyAllFill } from 'react-icons/bs';
import { MdOutlineModeComment } from 'react-icons/md';
import { AiOutlineSend } from 'react-icons/ai';

const Post = ({content, username, time}) => {
    let [counter, setCounter] = useState(0);
    let [click, SetClick] = useState(true);
    let [active, SetActive] = useState(false);

    const handleCounter = () => {
        SetClick(!click);
        console.log('---clicked');
        console.log(click);
        click ? setCounter(counter = counter + 1) : setCounter(counter = counter - 1);
    }

    const replyHandler = () => {
        SetActive(!active)
    }

    const commentHandler = () => {
        console.log('comment clicked');
    }

  return (
    <div className='post'>
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img src={Image} alt="user image" className="topbar-image post-profile-picture" />
                    <span className="post-username">{username}</span>
                    <span className="post-time">{time} mins ago</span>
                </div>
                <div className="post-top-right">
                    <FiMoreVertical />
                </div>
            </div>
            <div className="post-center">
                <div>{content}</div>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img src={Like} alt="like" className='like-image' onClick={handleCounter}/>
                    <img src={Heart} alt="heart" className='heart-image' onClick={handleCounter}/>
                    <span className="post-like-counter">{counter} people like this post</span>
                </div>
                <div className="post-bottom-right">
                    <button className='reply-btn' onClick={replyHandler}><BsReplyAllFill className='share-icons'/> Reply</button>
                    <button className='comment-btn' onClick={commentHandler}><MdOutlineModeComment className='share-icons'/>Comments</button>
                </div>
            </div>
            <div className={active ? "reply-active" : "reply-inactive"}>
                <div>
                    <input 
                        type="text" 
                        className='reply-input'
                        placeholder='Reply'
                    />
                </div>
                <div>
                    <AiOutlineSend />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
