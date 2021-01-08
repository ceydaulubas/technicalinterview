import React from "react";

import "../assets/style/AboutPage.scss";
import Me from "../assets/images/me.jpg"
import Pic from "../assets/images/pic.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container"style={{ marginBottom: "6%"}}>
      <div className="about"  >
      <div style={{ marginTop: "5%" , display: "flex"}}>
        <img className= "imageforAbout"
          src={Pic }
          alt="pic"
          style={{ width: '25%', marginRigt: "5%", float: "left" ,textAlign: "right" }}
        />
        <img className= "imageforAbout"
          src={Me}
          alt="Ceyda Ulubas"
          style={{ width: '25%', marginRigt: "auto", marginLeft: "auto", display:"inline" ,textAlign: "right",  objectFit:"cover"}}
        />
        <img className= "imageforAbout"
          src={Pic }
          alt="pic"
          style={{ width: '25%', marginRigt: "5%", float: "right" , textAlign: "right" }}
        />
        </div>
        <h3 style={{ textAlign: "center" }} >About Me.. </h3>
        <p >
          I graduated from Yeditepe University International Business Administration and Trade in 2016.
          I was a social and hardworking student throughout the university.
          I did a lot of internships during the university period and took a lot of tasks in the management club for 2 years.
          I started my business life in the marketing department right after my graduation.
          After 2.5 years of brand management experience, I decided to shift my career to software as a result of my travel to Holland to improve my language and myself.
          After self-learning for a while, I enrolled in the Ironhack Amsterdam  Bootcamp. I started Ironhack Amsterdam Web Development Bootcamp in October 2020.
          During 9 super intensive teaching weeks, I learned deeply information about full-stack development and created
            <Link to="/projects" ><buton> 3 different projects. 🎉</buton></Link>
        </p>
        <p style={{ marginLeft: "5%" }}>
          During and after the Bootcamp, I realized that I was a person who struggles with difficulties for myself,
          who does not give up, and can learn easily. For this reason,
          I believe that I will step into good jobs thanks to my researches and my good communication within the group on this new road I started.
          </p>
        <div style={{textAlign: "center" }}>
          <h3 >Personal Life.. </h3>
          <ul style={{ listStyle: "none"}}>
            <li>
              Unprofessional photographer.
            </li>
            <li>
              Interested in psychology books, snowboarding, and yoga.
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default About;
