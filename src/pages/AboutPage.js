import React from "react";

// import "../styles/About.scss";
import Me from "../assets/images/me.jpg"
import {Link } from "react-router-dom";

const About = () => {
  return (
      <div className="container">
        <div className="about" >
          <img
            src={Me}
            alt="Ceyda Ulubas"
            style={{ width: '30%', marginRigt: "5%", marginTop: "5%", float: "left", textAlign: "right" }}
          />
          <h3>About Me.. </h3>
          <p>
            I graduated from Yeditepe University International Business Administration and Trade in 2016.
            I was a social and hardworking student throughout the university.
            I did a lot of internships during the university period and took a lot of tasks in the management club for 2 years.
            I started my business life in the marketing department right after my graduation.
            After 2.5 years of brand management experience, I decided to shift my career to software as a result of my travel to Holland to improve my language and myself.
            After self-learning for a while, I enrolled in the Ironhack Amsterdam  Bootcamp. I started Ironhack Amsterdam Web Development Bootcamp in October 2020.
            During 9 super intensive teaching weeks, I learned deeply information about full-stack development and created 
            <Link to="/projects" ><buton> 3 different projects. 🎉</buton></Link>
          </p>
          <p>
            During and after the Bootcamp, I realized that I was a person who struggles with difficulties for myself,
            who does not give up, and can learn easily. For this reason,
            I believe that I will step into good jobs thanks to my researches and my good communication within the group on this new road I started.❤️
          </p>
        </div>
      </div>
  );
};

export default About;
