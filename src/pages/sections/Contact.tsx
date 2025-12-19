import "../styles/Contacts.css";

import { useState } from "react";
import "../styles/Contacts.css";

interface FlipCardProps {
  title: string;
  subtitle: string;
  backContent: React.ReactNode;
  isWide?: boolean;
}

const FlipCard = ({ title, subtitle, backContent, isWide = false }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`contact-card ${isWide ? "contact-card-wide" : ""} ${flipped ? "is-flipped" : ""}`}>
      <div className="contact-card-inner">
        <div className="contact-card-front">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <button className="card-flip-btn" onClick={() => setFlipped(true)} aria-label="Flip Card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
          </button>
        </div>
        <div className="contact-card-back">
          {backContent}
          <button className="card-flip-btn" onClick={() => setFlipped(false)} aria-label="Back">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ transform: "scaleX(-1)" }}>
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <>
      <div id="contact" className="section">
        <section className="contact-card-wrapper">

          <div className="contact-card-form-container">
            <span className="contact-card-heading">
              Get in <span className="text-accent">Touch</span>
            </span>

            <input type="text" placeholder="Name" className="contact-card-input" />
            <input type="email" placeholder="Email" className="contact-card-input" />
            <textarea rows={6} placeholder="Say Hello" className="contact-card-textarea"></textarea>

            <div className="contact-card-button-group">
              <button className="contact-card-send">Send</button>
              <button className="contact-card-reset">Reset</button>
            </div>
          </div>

          <div className="contact-card-grid">
            <FlipCard
              title="LinkedIn"
              subtitle="Connect with me"
              backContent={<img src="qr-linkedin.png" alt="LinkedIn QR" />}
            />
            <FlipCard
              title="GitHub"
              subtitle="View Projects"
              backContent={<img src="qr-github.png" alt="GitHub QR" />}
            />
            <FlipCard
              title="Email"
              subtitle="Say Hello"
              backContent={<img src="qr-email.png" alt="Email QR" />}
              isWide={true}
            />
          </div>

        </section>
      </div>
    </>
  );
}
