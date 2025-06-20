import React from 'react';
import './Home.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/coding-animation.json'; // Adjust path if different

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm <strong>Manohar Parimi</strong> 👋<br />
            A Computer Science student at NIT Durgapur who loves problem-solving
            and crafting interactive web experiences.
          </p>
          <p>
            Dive in to know more about my <strong>projects</strong>, <strong>skills</strong>, and <strong>social contributions</strong>.
          </p>
        </div>
        <div className="home-image-container">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
