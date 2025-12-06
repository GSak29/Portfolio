import "./App.css";
import "./components/fancybutton.css"
import FancyButton from "./components/fancybutton";

function App() {
  return (
    <>
      <div className="container">
        
        {/* LEFT SIDE */}
        <div className="left-section">
          <div className="subtitle">Electronics & Communication Engineer</div>

          <h1 className="headline">Hello, I'm Guru Sakthi S</h1>

          <p className="bio">
            Bridging Electronics, Communication Systems, and Modern Software
            Development.
          </p>
          <div>

          <div className="button-group">
            <a href="#" className="cv-button">
              Download CV
              <i className="bi bi-cloud-download"></i>
            </a>
            <FancyButton/>
          </div>
        </div>

     
    </div>
        {/* RIGHT SIDE */}
        <div className="right-section">
          <div className="organic-shape">
            <div className="portrait-placeholder">
              <img src="src/assets/me.png" alt="Profile" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
