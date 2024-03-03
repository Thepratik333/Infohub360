import React from 'react'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import NoteState from './context/notes/noteState'
import { LoginProvider } from './context/notes/loginContext'
import earth from './img/earth.mp4'
import weather from './img/weather.mp4'

const Layout = () => {
    const location = useLocation()
    const isHome = location.pathname === '/';
    const isWeather = location.pathname === '/weather';

    // useEffect(() => {
    //   if(isWeather){
    //     document.getElementsByClassName(
    //   }
    // }, [])
    
        return (
        <>
        <NoteState>
        <LoginProvider>
            <div className='video-container'>
                {isHome?<video autoPlay loop muted className='video-background' src={earth} />:isWeather?<video                                 style={{ filter: 'contrast(0.7)', zIndex: '-1', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
                autoPlay loop muted className='video-background' src={weather} />: null}
                <Navbar />
                <Outlet />
            </div>
        </LoginProvider>
    </NoteState>
        </>
    )
}

export default Layout
