// import { useState, useEffect } from 'react';
import './App.css';
import Crud from './Crud';
import React from 'react'
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
//Pages
const Home = () => {
  return (
    <div>
   <h2 className='header'>SPORTS EVENTS MANAGEMENT</h2>
   <p className='header2'> “Always work hard, never give up, and fight until the end because it’s never really over until the whistle blows.” —Alex Morgan</p>
      <Image className='banner-img'  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1007&q=80" alt="" srcset="" />
      <Link className='header1'  to='/events'>Get Started</Link> 
     
    </div>
  );
};

const Events = () => {
  return (
    <div>
     <Crud/>
    </div>
  );
};


const About = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
     <h2 className='abt-heading'>About the Project:</h2>
    <p>This project is about Sports Event Management. The users can create a new event by providing the event name, sports name, members, and a brief description. Description is optional. Technology stack used to implement this project is MERN Stack.<br/> <b>M=>MongoDB</b> <br/> <b>E=>Express</b> <br/> <b>R=>ReactJS</b> <br/><b>N=>NodeJS</b> <br/> 
    For styling <i>CSS</i> and <i>React Bootstrap</i> are used</p>
    <img src="https://media3.giphy.com/media/VrHfgexBdXc3Y1z7OP/giphy.gif?cid=ecf05e472ym1wwbtr9d0elacjyxr9vcgxsj0gh7sf568atlf&rid=giphy.gif&ct=g" alt="" srcset="" />
    </div>
  );
};
// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//     </div>
//   );
// };


function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            EVENTO
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/events"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
               About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  
  );
}
function App() {
  
  return (
    <>
     
       <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/contact" element={<Contact/>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;