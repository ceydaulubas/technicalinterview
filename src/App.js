import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CommentsPage from './pages/CommentsPage';
// import ContactPage from './pages/ContactPage';


function App() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg" >
            <Navbar.Brand >Ceyda's Portfolio</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" >
              <Nav className="ml-auto" >
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/comments">Comments</Link>
                {/* <Link className="nav-link" to="/contact">Contact</Link> */}
                <a style={{ textAlign:'center', padding:0 , margin:0, }}
          href="mailto:ceyda.ulubas@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >Contact
        </a>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <AboutPage />} />
          <Route path="/projects" render={() => <ProjectsPage />} />
          <Route path="/comments" render={() => <CommentsPage/>} />
          {/* <Route path="/contact" render={() => <ContactPage/>} /> */}
          
          <Footer />

        </Container>
      </Router>
    );
  }

export default App;
