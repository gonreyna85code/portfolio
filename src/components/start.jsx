import "../styles/start.css";

const start = () => {
    return (
        <div className="start">
            <div className="start-container">
                <div className="start-container-left">
                    <h1 className="name">GONZALO REYNA</h1>
                    <h6 className="subname">Full Stack Dev</h6>
                </div>
                <div className="start-container-right">
                    <a href="https://www.linkedin.com/in/gonzaloreyna/">
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://www.github.com/gonreyna85code" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/color/48/000000/github.png" alt="github" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=543513078206&text=Hola%20Gonzalo!" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp" />
                    </a>
                </div>
            </div>
        </div>
    );
};

                             

export default start;