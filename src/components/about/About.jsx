import React from "react";
import "./about.css";
import avatar from "../../img/avatar.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={avatar} alt="my avatar" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello! I'm Abhiram Rayidi, a passionate and dedicated Computer Science
          student from VIT-AP University with a specialization in AI and ML.
          With a CGPA of 9.62 and a solid foundation in Object Oriented
          Programming, Database Management Systems, and Data Structures and
          Algorithms, I thrive on solving complex problems and delivering
          innovative solutions.
        </p>
        <p className="a-des">
          Currently, I am actively developing my project, Detecting Real and AI
          Generated Synthetic Images. My projects range from Rice Plant Disease
          Detection, where I applied ResNet for precise disease identification,
          to Armed Against Violence, a YOLOv7-based weapon detection system.
          I've also developed a Product Review and Rating Platform using the
          MERN stack, focusing on user engagement and seamless functionality.
          I'm excited about the intersection of technology and design thinking.
          My approach to problem-solving integrates design methodologies with
          data analytics to create impactful solutions.
        </p>
        <br />
        <p className="a-des">
          Outside of my professional work, I engage in playing cricket, which
          sharpens my strategic thinking and teamwork skills. Watching movies,
          on the other hand, fuels my creativity and inspires innovative ideas.
          Feel free to explore my portfolio and reach out if you’d like to
          collaborate or learn more about my projects!
        </p>
      </div>
    </div>
  );
};

export default About;
