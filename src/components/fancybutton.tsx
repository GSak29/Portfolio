import { useState } from 'react';

export default function FancyButton() {
  const [showPopup, setShowPopup] = useState(false);

  const navImages = [
    { id: 1, src: 'src/assets/about.png', label: 'about', href: '#portfolio' },
    { id: 2, src: 'src/assets/projects.png', label: 'Projects', href: '#projects' },
    { id: 3, src: 'src/assets/contacts.png', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setShowPopup(false);
    // Add navigation logic here
  };

  return (
    <>
      <button className="button" onClick={() => setShowPopup(true)}>
        <div className="bloom-container">
          <div className="button-container-main">
            <div className="button-inner">
              <div className="back"></div>
              <div className="front">
                <span className="button-text">Explore</span>
              </div>
            </div>

            <div className="button-glass">
              <div className="back"></div>
              <div className="front"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Modal Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="popup-close" 
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
            >
              ✕
            </button>

            <div className="popup-grid">
              {navImages.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="popup-nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <div className="popup-image-container">
                    <img src={item.src} alt={item.label} />
                    <div className="popup-image-overlay">
                      <span className="popup-label">{item.label}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Animated Blobs */}
            <div className="popup-blob blob1"></div>
            <div className="popup-blob blob2"></div>
          </div>
        </div>
      )}
    </>
  );
}
