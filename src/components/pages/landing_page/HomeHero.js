import React from 'react';
import '../../../App.css';
import './styles/HomeHero.css';
import { HomeForm} from './HomeForm';

function HomeHero() {
    
    return (
        <div className='hero-container'>
            <video src="/videos/video2.mp4" autoPlay loop muted />
            <h1>Plan | Manage | Expand 
            </h1>
            <HomeForm />
        </div>
    )
}

export default HomeHero;
