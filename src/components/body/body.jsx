import React from 'react'
import "./body.css";
import Post from '../post/post';
import { useState ,useEffect} from 'react';
import { db } from '../../firebasedb';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import axios from "axios"

function body() {
  const [posts, setPosts] = useState([
    {
      username: "james",
      url: "./images/image1.jpg",
      caption: "i love to vode"
    },
    {
      username: "Steve",
      url: "./images/image2.jpg",
      caption: "i love to code"
    }
  ]);
 /*  useEffect(() => {
    axios.get('http://localhost:5000/getposts')
    .then(posts => setPosts(posts.data))
    .catch(err => console.log(err))

  },[]) */

 /*  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []) */
  

  return (
    <div className='app'>
      <div className="app-header">
        <h2>TechPulse</h2>
      </div>
      {
      posts.map(post => (
        <Post username={post.username} caption={post.caption} url={post.url} />
      ))
      }      
      

    </div>
  )
}

export default body
