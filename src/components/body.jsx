import { useState ,useEffect} from 'react';
import "./body.css";
import Post from './post';
import  {db } from '../firebase';
import ImageUpload from './imageUpload';


function body() {
  const [posts, setPosts] = useState([]);
   useEffect(() => {
     db.collection('posts').onSnapshot(snapshot => {
      //everytime a new post is added this code fires
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id,
        post:doc.data()
        })))
     })
  },[]) 

 

  return (
    <div className='app'>
      
      
      <div className="app-header">
        <h2>TechPulse</h2>
      </div>
      <div className="app-post">
      {
      posts.map(({id, post}) => (
        <Post key={id} username={post.username} caption={post.caption} description={post.description} url={post.url} />
      ))
      }      
      </div>
      
      
      <ImageUpload />
    </div>
  )
}

export default body
