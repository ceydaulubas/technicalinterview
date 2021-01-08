import React from "react";
// import "../styles/Projects.scss";
import Card from "react-bootstrap/Card";
import PetAdopt from "../assets/images/petadopt1.png"
import CodeChat from "../assets/images/codeChat-screenhot.png"
import HalloweenSnake from "../assets/images/HalloweenSnake-screenshot.png"


const projects = () => {
  return (

    <div className="containerP" style={{ width: '75%', display:'block', marginLeft:'auto', marginRight:'auto',marginTop:'3%'}}>
    <h1 style={{ textAlign:'center'}}>My Projects</h1>
      <Card className="project1" style={{marginTop:'2%'}}>
        <Card.Img variant="top" src={PetAdopt} style={{ width: '100%' , height: '100%' , borderRadius:"25px"}}  />
        <Card.Body>
          <Card.Title >PetAdopt</Card.Title>
          <Card.Text >
            Final Project in Ironhack.
            This website provides easy access and adoption to cats and dogs waiting for adoption.
        </Card.Text>
          <Card.Text style={{ marginBottom:'1%' }}>
            <b> Stack: </b>MongoDB, Mongoose, Express.js, React Js, Node.js
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a
            className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
            href="https://pet-adopt-ironhack.herokuapp.com/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Website
            </a>
          <a
            className="btn-primary pt-1 pb-1 pl-2 pr-2"
            href="https://github.com/ceydaulubas/petAdopt"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Github
          </a>
        </Card.Footer>
      </Card>

      <Card className="project2" style={{marginTop:'2%'}}>
        <Card.Img variant="top" src={CodeChat}  style={{ width: '100%' , height: '100%' , borderRadius:"25px"}}/>
        <Card.Body>
          <Card.Title>CodeChat</Card.Title>
          <Card.Text>
            Second group project in Ironhack.
            Social network platform for people who want to connect with other coders.
        </Card.Text>
          <Card.Text>
            <b> Stack: </b> Node.js , Express.js, SCSS, MongoDB, Mongoose, Handlebars
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a
            className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
            href="http://codechat-ironhack.herokuapp.com"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Website
            </a>
          <a
            className="btn-primary pt-1 pb-1 pl-2 pr-2"
            href="https://github.com/eliachiarucci/codechat.git"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Github
          </a>
        </Card.Footer>
      </Card>

      <Card className="project3" style={{marginTop:'2%'}}>
        <Card.Img variant="top" src={HalloweenSnake} style={{ width: '100%' , height: '100%' , borderRadius:"25px"}} />
        <Card.Body>
          <Card.Title>HalloweenSnake</Card.Title>
          <Card.Text  >
            First group project in Ironhack.
            Halloween Snake is a modified version of the Nostalgic snake game with the Halloween theme.
        </Card.Text>
          <Card.Text >
            <b> Stack: </b> Javascript, HTML, CSS
        </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a
            className="btn-warning pt-1 pb-1 pl-2 pr-2 mr-4"
            href="https://codebrokerad.github.io/halloweenSnake/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Website
            </a>
          <a
            className="btn-primary pt-1 pb-1 pl-2 pr-2"
            href="https://github.com/codebrokerad/halloweenSnake"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Github
          </a>
        </Card.Footer>
      </Card>
    </div>
  )
};
export default projects;