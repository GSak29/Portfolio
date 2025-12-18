import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FancyButton() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();



  return (
    <>
      <div className="button-wrapper">  
        <button className="button" onClick={() => { setShowPopup(true); }} aria-haspopup="true" aria-expanded="false" title="Navigation menu">
          <div className="bloom-container">
            <span className="button-label"></span>
            <div className="button-container-main">
              <div className="button-inner">
                <div className="back"></div>
                <div className="front">
                  
                  <span className="button-text"><i className="bi bi-compass"></i></span>
                </div>
              </div>

              <div className="button-glass">
                <div className="back"></div>
                
                <div className="front"></div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => { setShowPopup(false); }}>
            <div className="popup-content details" onClick={(e) => e.stopPropagation()}>
              <button
                className="popup-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(false);
                }}
                aria-label="Close popup"
              >
                ✕
              </button>
              <div className="details-header">
                <div className="nav-icon" aria-hidden>
                 <img src="src/assets/mine.png" alt="Navigation icon"/>
                </div>
                <h3 className="details-title">Beyond the Resume??</h3><img src="src/assets/st.png" height="100" width="40" alt="Decorative element"/>
              </div>
              <p className="details-body">Explore My Skills, projects, achievements, certifications, and ideas presented in a fast, responsive layout.</p>
              <div className="details-actions">
                <button className="btn primary" onClick={() => { setShowPopup(false); navigate('/works'); }}>Explore</button>
                <button className="btn ghost" style={{ marginLeft: '0.75rem' }} onClick={() => { setShowPopup(false); }}>Back</button>
              </div>
            </div>
        </div>
      )}
    </>
  );
}
