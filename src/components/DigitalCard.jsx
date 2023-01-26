import React from "react";
import CardImg from './My_Pic.jpg'
import mail from '../images/mail.png'
import linkedin from '../images/linkedin.png'
export default function DigitalCard() {
  return (
    <div className="card">
      <div className="cardimage">
        <div className="stylingimage1"></div>
        <div className="stylingimage2"></div>
        <img  className="card--image" src={CardImg} alt="MyImage"></img>
      </div>
      <div className="card--info">
        <div className="card--desc">
          <p>Saksham Garg</p>
          <p><i>Full Stack Developer</i></p>
          {/* <p><b><i></i></b></p> */}
        </div>
        <div className="card--button">
          <a href="mailto:sakshamgarg142@hotmail.com" target="_blank"><button><img src={mail}></img>Email</button></a>
          <a href="https://www.linkedin.com/in/saksham-garg-9a8a631b1/" target="_blank"><button><img src={linkedin}></img>LinkedIn</button></a>
        </div>
    </div>
        <div className="card--details">
          <div className="card--about">
            <h1>About</h1>
            <p>Always eager to learn new things and grabbing new opportunities
                and interested in Full stack development and solving Data Structures and Algorithms 
                problems.
            </p>
          </div>
          <div className="card--interest">
            <h1>Interests</h1>
            <p>My like to read self-help and fiction books and also love to do cycling 
                and I also love to travel but most of the time I love to do coding.
            </p>
          </div>
        
      </div>
      <div className="card-footer">
        <div className="social--links">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  );
}
