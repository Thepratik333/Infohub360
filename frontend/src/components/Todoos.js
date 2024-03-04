import React, { useEffect } from 'react'
import Notes from './Notes';
import Alert from './Alert';
import { useLocation } from 'react-router-dom';


const Todoos = () => {
  const location = useLocation();
  let Todoos = location.pathname.startsWith('/todo');
  useEffect(()=>{
    if (Todoos){
      let video = document.getElementsByClassName('video-background')
      video.remove();
    }
  },[Todoos])
  return (
    <div>
    <Alert/>
    <Notes/>
    </div>
  )
}

export default Todoos
