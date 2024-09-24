import React from 'react';
import "./Hero.css";
import  hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

function Hero() {
  return (
    <>
      <div class="hero">
        <div class="hero-left">
            <h2 class="">New Arrivals</h2>
            <div class="later">
                <div class="hand-hand-icon">
                    <p>New</p>
                    {/* <img src={hand_icon} alt="" /> */}
                </div>
                <p>Collection</p>
                <p>Arrived</p>
            </div>
            <div class="hero-latest-btn">
                <div>Check Latest Collection</div>
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
        <div class="hero-right">
            <img src={hero_image} alt="" />

        </div>
      </div>
    </>
  )
}
export default Hero;