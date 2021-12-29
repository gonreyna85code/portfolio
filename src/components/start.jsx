import "../styles/start.css";
import "../styles/startmobile.css";
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import img from "./img.png";
import Popup from "reactjs-popup";
import whats from "../styles/whats.png";
import linked from "../styles/linked.png";
import git from "../styles/git.png";

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const start = () => {
  return !isMobile ? (
    <div className="start">
      <div className="crt site-title">
        <div className="box-container">
          <div className="box">
            <div className="leftcontainer">
              <div className="leftside">
                <div className="bioconsole">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(20)
                        .pauseFor(1500)
                        .typeString("> GONZALO REYNA ")
                        .pauseFor(1000)
                        .changeDelay(200)
                        .typeString(" ----- ")
                        .pauseFor(1000)
                        .changeDelay(1)
                        .typeString(" FullStack Developer <Br/>")
                        .typeString("<Br/>")
                        .pauseFor(1500)
                        .changeDelay(20)
                        .typeString("Currently based on Argentina.<br/>")
                        .pauseFor(1000)
                        .typeString(
                          " During my boot camp, I found myself enjoying every challenge. After more than 12 years working in hotel management I decided to turn the table and change the direction of my professional life. I am a team player, analytical, very resilient and last but not less important I love coding!"
                        )
                        .changeDelay(1)
                        .start();
                    }}
                  />
                </div>
                <div className="footcontainer">
                  <div className="buttons">
                    <Link to="/profile">
                      <button className="button">PROJECTS</button>
                    </Link>
                    <Popup
                      trigger={<button className="button"> CONTACT ME </button>}
                      position="bottom center"
                    >
                      <div className="containers">
                        <a
                          className="icon"
                          href="https://www.linkedin.com/in/gonzaloreyna/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={linked} alt="linkedin" />
                        </a>
                        <a
                          className="icon"
                          href="https://github.com/gonreyna85code"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={git} alt="github" />
                        </a>
                        <a
                          className="icon"
                          href="https://api.whatsapp.com/send?phone=543513078206&text=Hola%20Gonzalo!"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={whats} alt="whatsapp" />
                        </a>
                      </div>
                    </Popup>
                  </div>
                  <div className="comms">
                    COMMUNICATION
                    <br />
                    <div className="languages">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .changeDelay(20)
                            .pauseFor(10000)
                            .typeString("English ")
                            .changeDelay(200)
                            .typeString("-----")
                            .changeDelay(20)
                            .typeString(" C2 PROFICIENT <br/>")
                            .pauseFor(1000)
                            .typeString("Portuguese ")
                            .changeDelay(200)
                            .typeString("-----")
                            .changeDelay(20)
                            .typeString(" PROFICIENT")
                            .changeDelay(1)
                            .start();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightcontainer">
                <div className="imagebox">
                  <img className="image" src={img} alt="" />
                </div>
                SKILLS
                <div className="skillbox">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(16000)
                        .changeDelay(100)
                        .changeDelay(1)
                        .typeString("• Agile Mindset <br/>")
                        .typeString("• Javascript <br/>")
                        .typeString("• React <br/>")
                        .typeString("• Redux <br/>")
                        .typeString("• CSS <br/>")
                        .typeString("• HTML <br/>")
                        .typeString("• Node JS <br/>")
                        .typeString("• Express JS <br/>")
                        .typeString("• MongoDB <br/>")
                        .typeString("• Postgres <br/>")
                        .typeString("• Mongoose <br/>")
                        .typeString("• Sequelize <br/>")
                        .typeString("• Scrum")
                        .start();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mobilestart">
      <h2> Sorry, this page is only available on desktop computers </h2>
    </div>
  );
};

export default start;
