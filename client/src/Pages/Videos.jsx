import React, { useEffect, useState } from 'react'
import { baseUrl, getRequest } from '../utils/service';
import { MdVideoLibrary } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

// where we can see all the videos that are uploaded
const Videos = () => {
const [videos,setVideos] = useState([]);
const navigate =  useNavigate();

  useEffect(()=>{
     getAllVideos();
  },[])

  async function getAllVideos(){
    let response = await getRequest(`${baseUrl}/video/get`);
    setVideos(response);
  }


  return (
    <>
      <h1 style={{textAlign:'center',color:'white'}} >videos</h1>
      <div className='video-grid'>
        {videos && videos.map((video,index)=>(
          <div key={index} onClick={()=>{navigate(`/video-edit/${video._id}`)}} className='video-card'>
            <MdVideoLibrary/>
          </div>
        ))}
      </div>
    </>
  
  )
}

export default Videos