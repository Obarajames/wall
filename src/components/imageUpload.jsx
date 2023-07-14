import React, { useState } from 'react'
import { Button } from "@mui/material"
import { storage, db } from "../firebase"
import "./imageupload.css"

function imageUpload() {
  //states for upload
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const [progress, setProgress] = useState(0)

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
//upload functionality
const handleUpload = () => {
  const uploadTask = storage.ref(`images./${image.name}`).put(image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
    (error) => {
      console.log(error);
      alert(error)
    },
    () => {
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          // Post image into the database
          db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            url: url,
          });

          setProgress(0);
          setCaption("");
          setImage(null);
        });
    }
  );
};

  return (
    <div className='imageupload'>
      <process className="imageupload-progress" value={progress} max="100"></process>
      <input type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)} value={caption} />

      <input type="file" onChange={handleChange} />

      <button onClick={handleUpload}>
        Upload
      </button>

    </div>
  )
}

export default imageUpload
