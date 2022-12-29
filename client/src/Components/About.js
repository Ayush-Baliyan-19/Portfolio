import me from "./images/Me.png";
import "./css/About/about.css";
// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";

// var token;
const About = () => {
//   useEffect(() => {
//     token = window.localStorage.getItem("token")
//     console.log(token)
//   })

  // if (token) {
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
            <h2>Ayush Baliyan</h2>
            <h5>Web Developer</h5>
            <p>
            Second-year CSE student, aspiring SDE. My passion for writing codes and diving deep into the computer world brought me to the University School of Information, Communication, and Technology, where I am currently getting the most experience of being a web developer and a graphic designer. Last year I completed the MERN Stack Development, which let me get exposure to being a full stack developer.
            
            This year I am exploring different fields like WEB-3, Game Development, Cyber Security etc.
            &#128512;
            </p>
          </div>
        </section>
        <hr />
        <section className="profs" >
          <div className="skills">
            <h2>Skills:</h2>
            <ul>
              <li>MERN Stack</li>
              <li>Unity Game Development</li>
              <li>Graphic Designing</li>
              <li>UI/UX</li>
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
                  <div className="desc">One Of the finest Tech Club in USICT which maintains all of the development in the univeristy varying from Developing University's Website to Developing Products</div>
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
  }
  // else {
    // return (
    //   <Navigate to='/login' />
    // )
  // }
// }
  ;
export default About;
