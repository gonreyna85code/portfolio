import React from "react";
import ReactPlayer from "react-player";
import Popup from "reactjs-popup";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import whats from "../styles/whats.png";
import linked from "../styles/linked.png";
import git from "../styles/git.png";
import "../styles/profile.css";
import "../styles/profilemobile.css";

const videos = [
  {
    id: 1,
    title: "Dogs App",
    src: "https://youtu.be/wnFpxkXkS2o",
    description:
      "The App front-end was made using React – Redux for the state management and Css to add stiles. On the back-end I used NodeJS, ExpressJS, Sequelize and a database created on Postgress. The back-end consume data from an external API and storing the data on the database.",
  },
  {
    id: 2,
    title: "Travel Activity Planner",
    src: "https://youtu.be/wnFpxkXkS2o",
    description:
      "This project was built using React-Redux, Css, Node, Sequelize, Express and Postgress. This project uses minimal stiles and filtering processes managed entirely by Redux. Like my other projects every submit form is a controlled component.",
  },
  {
    id: 3,
    title: "Simple Videogame Database",
    src: "https://youtu.be/wnFpxkXkS2o",
    description:
      "This App was created using React – Redux and Css on its front, the back-end was developed using Node, Express, Sequelize and Postgress. The difference on this back-end is that it consumes data from an API-REST and in this case the data is NOT stored on the databse.",
  },
];

const Profile = () => {
  const [video, setVideo] = React.useState(videos[0]);
  const [description, setDescription] = React.useState(video.description);
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleClick = async (title) => {
    console.log(title);
    const video = await videos.find((v) => v.title === title);
    console.log(video);
    setVideo(video);
    setDescription(video.description);
  };

  return !isMobile ? (
    <div className="profile">
      <div className="crt site-title">
        <div className="profile-container">
          <div className="profile-container-top">
            <div className="profile-container-left-top">
              <div className="video-container">
                <ReactPlayer width="100%" height="100%" url={video.src} />
              </div>
            </div>
            <div className="projects">
              PROJECTS
              <div className="profile-container-right-top">
                <button
                  className="video-selector"
                  onClick={(e) => handleClick(e.target.value)}
                  value="Dogs App"
                >
                  Dogs App
                </button>
                <button
                  className="video-selector"
                  onClick={(e) => handleClick(e.target.value)}
                  value="Travel Activity Planner"
                >
                  T - A - P
                </button>
                <button
                  className="video-selector"
                  onClick={(e) => handleClick(e.target.value)}
                  value="Simple Videogames Database"
                >
                  SVD
                </button>
              </div>
            </div>
          </div>
          <div className="profile-container-bottom">
            <div className="buttons2">
              <Link to="/">
                <button className="button2">HOME</button>
              </Link>
              <Popup
                trigger={<button className="button2"> CONTACT ME </button>}
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
            <div className="video-info">
              {video.description === description ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(2)
                      .typeString(`[${video.title}] `)
                      .changeDelay(350)
                      .pauseFor(800)
                      .changeDelay(1)
                      .typeString(video.description)
                      .start();
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mobileprofile">
      <div className="crt site-title">
        <div className="mobile-video">
          <ReactPlayer width="100%" height="100%" url={video.src} />
        </div>
        <div className="mobile-projects">
          <button
            className="mobile-video-selector"
            onClick={(e) => handleClick(e.target.value)}
            value="Dogs App"
          >
            Dogs App
          </button>
          <button
            className="mobile-video-selector"
            onClick={(e) => handleClick(e.target.value)}
            value="Travel Activity Planner"
          >
            T - A - P
          </button>
          <button
            className="mobile-video-selector"
            onClick={(e) => handleClick(e.target.value)}
            value="Simple Videogame Database"
          >
            SiViD
          </button>
        </div>
        <div className="mobile-profile-footer">
          <div className="mobile-profile-buttons">
            <Link to="/">
              <button className="mobile-button">HOME </button>
            </Link>
            <Popup
              trigger={<button className="mobile-button"> CONTACT</button>}
              position="right"
            >
              <div className="containers-mobile-profile">
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
          <div className="mobile-profile-info">
            {video.description === description ? (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(2)
                    .typeString(`[${video.title}]<br/>`)
                    .pauseFor(1000)
                    .changeDelay(1)
                    .typeString(video.description)
                    .start();
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
