import React from "react";
import ReactPlayer from "react-player";
import Popup from "reactjs-popup";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import whats from "../styles/whats.png";
import linked from "../styles/linked.png";
import git from "../styles/git.png";
import "../styles/profile.css";

const videos = [
  {
    id: 1,
    title: "Dogs App",
    src: "http://vimeo.com/659415660",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Monique",
    src: "http://www.youtube.com/watch?v=MdcxWieOSME",
    description: "otrem ipsum sañljñsoghsdnfkghisdñofgn",
  },
];

const Profile = () => {
  const [video, setVideo] = React.useState(videos[0]);
  const [description, setDescription] = React.useState(video.description);

  const handleClick = async (title) => {
    console.log(title);
    const video = await videos.find((v) => v.title === title);
    console.log(video);
    setVideo(video);
    setDescription(video.description);
  };

  return (
    <div className="profile">
      <div className="crt site-title">
        <div className="profile-container">
          <div className="profile-container-top">
            <div className="profile-container-left-top">
              <div className="video-container">
                <ReactPlayer url={video.src} />
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
                  value="Monique"
                >
                  Monique
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
                position="bottom"
              >
                <div className="containers">
                  <a className="icon"
                    href="https://www.linkedin.com/in/gonzaloreyna/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linked} alt="linkedin" />
                  </a>
                  <a className="icon"
                    href="https://github.com/gonreyna85code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={git} alt="github" />
                  </a>
                  <a className="icon"
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
                      .pauseFor(2500)
                      .changeDelay(2)
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
  );
};

export default Profile;
