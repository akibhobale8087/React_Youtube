import React from 'react'
import { useEffect,useState } from 'react'
import {YOUTUBE_MOST_POPULAR_VIDEO_API} from "../utils/constant";
import VideoCard from './VideoCard';
import {Link} from "react-router-dom";
const VideoContainer = () => {

  console.log("Initial state")
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  async function getVideos(){
    let data = await fetch(YOUTUBE_MOST_POPULAR_VIDEO_API);
    let result = await data.json();
    setVideos(result.items);
    
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map(video=> 
      <Link to={"/watch?v="+video.id} key={video.id}>
        <VideoCard info={video} /></Link>
        )}
      </div>
  )
}

export default VideoContainer