import React from 'react';
import '../App.css';
import{ Button } from './Button';
import './HeroSection.css';
import { Form} from './Form';

function HeroSection() {
    
    return (
        <div className='hero-container'>
            <video src="/videos/video2.mp4" autoPlay loop muted />
            <h1>Plan | Manage | Expand 
            </h1>
            <Form />
        </div>
    )
}

export default HeroSection;
