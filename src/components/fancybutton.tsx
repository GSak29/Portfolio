import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FancyButton() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 1, key: 'My Works', label: 'My Works', href: '/works' },
    { id: 2, key: 'Achievements', label: 'Achievements', href: '#Achievements' },
    { id: 3, key: 'Certifications', label: 'Certifications', href: '#Certifications' },
    { id: 4, key: 'Skills', label: 'Skills', href: '#Skills' },
    { id: 5, key: 'Contact', label: 'Contact', href: '#Contact' },
  ];

  const handleNavClick = (href: string) => {
    setShowPopup(false);
    
    // Handle route navigation
    if (href === '/works') {
      navigate('/works');
      return;
    }
    
    // Handle anchor navigation
    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderIcon = (key: string) => {
    // simple inline SVG icons (no external images)
    switch (key) {
      case 'My Works':
        return (
          <i className="bi bi-layers"></i>
        );
      case 'Achievements':
        return (
          <i className="bi bi-trophy"></i>
        );
      case 'Certifications':
        return (
          <i className="bi bi-file-earmark-text"></i>
        );
      case 'Skills':
        return (
           <i className="bi bi-code-slash"></i>
        );
      case 'Contact':
        return (
          <i className="bi bi-chat-dots"></i>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="button-wrapper">  
        <button className="button" onClick={() => setShowPopup(true)} aria-haspopup="true" aria-expanded="false" title="Navigation menu">
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
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
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

            <nav className="nav-popup" role="navigation" aria-label="quick links">
              <ul className="nav-pill">
                {navItems.map((item, idx) => (
                  <li key={item.id} className={`nav-item nav-item--${idx + 1}`}>
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      <div className="nav-icon" aria-hidden>
                        {renderIcon(item.key)}
                      </div>
                      <span className="nav-label">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      )}
    </>
  );
}
