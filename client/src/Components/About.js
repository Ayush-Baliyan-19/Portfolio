import React from "react";
import me from "./images/Me.png";
import "./css/About/about.css";
const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-image">
          <div className="popout">
            <div className="circle">
              <img
                aria-hidden="true"
                src="http://placeimg.com/600/600/nature"
                alt="Nature"
              />
            </div>
            <div className="person">
              <img alt="Jane Doe" src={me} />
              <div className="desc">
                Ayush Baliyan
                <br />
                Mern Developer
              </div>
            </div>
          </div>
        </div>
        <div className="aboutme">
          <h2>Himesh Nayak</h2>
          <h5>Gdsc-Lead</h5>
          <p>
            I am a first year CSE Undergrad Student, currently learning Mern
            Stack And The Relate Stuff. Hope You Like The Site And Give Me A
            Follow At Github &#128512;
          </p>
        </div>
      </section>
      <hr />
      <section className="profs" >
        <div className="skills">
          <h2>Skills:</h2>
          <ul>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>C++</li>
            <li>DSA</li>
          </ul>
        </div>
        <div className="timelinee" >
  
  
  <ul className="timeline">
  
    <li>
      <div className="direction-r">
        <div className="flag-wrapper">
          <span className="flag">SDC-USICT</span>
          <span className="time-wrapper"><span className="time">2021 - Present</span></span>
        </div>
        <div className="desc">One Of the finest Tech Club in USICT which maintains all of th Ipu's Websites</div>
      </div>
    </li>
    
    <li>
      <div className="direction-r">
        <div className="flag-wrapper">
          <span className="flag">Techspace USICT</span>
          <span className="time-wrapper"><span className="time">2021 - Present</span></span>
        </div>
        <div className="desc">One of My Favorite Tech Club, I gives me a free hand to explore and learn while doing the work.</div>
      </div>
    </li>
  
    <li>
      <div className="direction-r">
        <div className="flag-wrapper">
          <span className="flag">TNP Cell USICT</span>
          <span className="time-wrapper"><span className="time">2021 - Present</span></span>
        </div>
        <div className="desc">Being a designer in TNP Cell USICT gives me a good knowledge of how User will like the design</div>
      </div>
    </li>
    
  </ul>
  
        </div>
      </section>
    </div>
  );
};

export default About;
