import React from "react";
import "../assets/style/Footer.scss";

import GithubLogo from "../assets/images/githubwhite.png"
import LinkedinLogo from "../assets/images/linkedin.png"
import MailLogo from "../assets/images/mail.png"
import MediumLogo from "../assets/images/medium-logo.png"

const Footer = () => (
  <div className="footer">
    <ul className="menu">
              <li className="list">
                <a href="https://github.com/ceydaulubas"><img src={GithubLogo} /></a>
              </li>

              <li className="list">
                <a href="https://www.linkedin.com/in/ceydaulubas/"><img src={LinkedinLogo}/></a>
              </li>

              <li className="list">
                <a href="mailto:ceyda.ulubas@hotmail.com"><img src={MailLogo}/> </a>
              </li>

              <li className="list">
                <a href="https://ceydaulubas.medium.com/"><img src={MediumLogo}/> </a>
              </li>
            </ul>
  </div>
);

export default Footer;