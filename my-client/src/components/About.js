import React from 'react';
import './About.css';
import profilePic from '../images/manohar.JPG';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h1>Meet Manohar Parimi</h1>
          <p>
            I'm a Computer Science undergraduate at the <strong>National Institute of Technology, Durgapur</strong>, passionate about building interactive web applications and contributing to community development.
          </p>

          <section className="section">
            <h2>🚀 Projects</h2>
            <ul>
              <li>
                <strong>Interactive Pricing Component</strong> – Built a responsive and dynamic pricing slider using <strong>React.js</strong> and <strong>JavaScript</strong> to allow users to adjust pricing based on interaction.
              </li>
            </ul>
          </section>

          <section className="section">
            <h2>🛠️ Skills</h2>
            <ul>
              <li><strong>Languages:</strong> C, C++, JavaScript</li>
              <li><strong>Frontend:</strong> HTML, CSS, React.js</li>
              <li><strong>Tools:</strong> GitHub, Video Editing (basic)</li>
            </ul>
          </section>

          <section className="section">
            <h2>🤝 Social Contributions</h2>
            <p>
              As a <strong>Senior Member of NSS at NIT Durgapur</strong>:
            </p>
            <ul>
              <li>Organized cultural events and public service camps for underprivileged communities.</li>
              <li>Led the video editing team for campaigns and social initiatives.</li>
              <li>Produced visual content for awareness drives and events, focusing on impactful storytelling.</li>
            </ul>
          </section>

          <section className="section">
            <h2>📫 Get In Touch</h2>
            <p>Email: <a href="mailto:manoharparimi2004@gmail.com">manoharparimi2004@gmail.com</a></p>
            <p>Phone: +91 9912294482</p>
            <a 
              href="https://www.linkedin.com/in/manohar-parimi-90367b2a6/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="linkedin-link"
            >
              LinkedIn Profile
            </a>
          </section>
        </div>

        <div className="profile-image-container">
          <img 
            src={profilePic} 
            alt="Manohar Parimi" 
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
