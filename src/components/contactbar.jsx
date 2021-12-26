const ContactBar = () => {
  return (
    <div className="bar">
        <div>
      <h1 className="name">GONZALO REYNA</h1>
      <h6 className="subname">Full Stack Dev</h6>
      </div>
      <div className="containers">
        <a href="https://www.linkedin.com/in/gonzaloreyna/">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/gonreyna85code"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=543513078206&text=Hola%20Gonzalo!"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            alt="whatsapp"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
