import ConfidentSmile from "./ConfidentSmile.jpg";

const AboutProjectCard = () => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title title is-1">About</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-image">
        {/* Change size of card (is-XYZ) and commit todays work to GitHub */}
        <figure className="image">
          <img src={ConfidentSmile} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          The code for this project was written by David Rönnlid. No help except
          Google, Stack Overflow, blogs, etc. was used.
        </div>
      </div>
      <footer className="card-footer">
        <a
          href="https://github.com/davidronnlid/get_nutrient_foods"
          className="card-footer-item"
        >
          Project Github page
        </a>
        <a
          href="https://www.linkedin.com/in/davidronnlid/"
          className="card-footer-item"
        >
          David Rönnlid on LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default AboutProjectCard;
