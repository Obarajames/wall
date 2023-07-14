import React from 'react'
import "./post.css"
import Avatar from '@mui/material/Avatar';


function post({username,caption,url,description}) {

    return (
        <div className='post'>
            <div className="post-header">
            <Avatar 
            className='post-avatar'
            alt="James" 
            src="/static/images/avatar/1.jpg" />
            <h3>{username}</h3>
            </div>
            <div className='post__description'><p>{description}</p></div>
            <img className='post-image' src={url} alt="" />
            <h4 className='post-text'><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default post
