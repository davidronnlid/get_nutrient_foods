import ConfidentSmile from "./ConfidentSmile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const AboutProjectCard = () => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title title is-1">About project</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-image">
        <figure className="image is-16by9">
          <img
            src={ConfidentSmile}
            style={{ objectFit: "cover", objectPosition: "100% 18%" }}
            alt="David Rönnlid smiling"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content has-text-weight-medium">
          The code for this project was written by David Rönnlid. No help except
          Google, Stack Overflow, blogs, etc. was used.
        </div>
      </div>
      <footer className="card-footer has-border">
        <a
          href="https://github.com/davidronnlid/get_nutrient_foods"
          className="card-footer-item  is-underlined"
        >
          Project Github page{" "}
          <FontAwesomeIcon icon={faGithubSquare} border pull="right" />
        </a>

        <a
          href="https://www.linkedin.com/in/davidronnlid/"
          className="card-footer-item is-underlined"
        >
          David Rönnlid on LinkedIn{" "}
          <FontAwesomeIcon icon={faLinkedin} border pull="right" />
        </a>
      </footer>
    </div>
  );
};

export default AboutProjectCard;
