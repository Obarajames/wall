import React,{useState} from 'react'
import { Button } from "@mui/material"

function imageUpload() {
    const [image, setImage] = useState(null)
    const [caption, setCaption] = useState('')
    const [progress, setProgress] = useState(0)

    const handleChange = (e) =>{
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () =>{

    }
  return (
    <div>
      <input type="text" placeholder='Enter a caption...' onChange={event=>setCaption(event.target.value)} value={caption} />
      <input type="file"onChange={handleChange}/>
      <button onClick={handleUpload}>
        Upload
      </button>

    </div>
  )
}

export default imageUpload
