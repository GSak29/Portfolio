import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contacts.css";

interface FlipCardProps {
  title: string;
  frontImage?: string;
  backContent: React.ReactNode;
  isWide?: boolean;
  targetUrl?: string;
}

const FlipCard = ({ title, frontImage, backContent, isWide = false, targetUrl }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`contact-card ${isWide ? "contact-card-wide" : ""} ${flipped ? "is-flipped" : ""}`}>
      <div className="contact-card-inner">
        <div className="contact-card-front">
          <div className="card-content">
            {frontImage && (
              targetUrl ? (
                <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="card-image-link">
                  <img src={frontImage} alt={title} className="card-front-image" />
                </a>
              ) : (
                <img src={frontImage} alt={title} className="card-front-image" />
              )
            )}
            <h3>{title}</h3>
            {/* Subtitle and Description removed from front as requested by user ("only the image the name linked in") */}
          </div>
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSending(true);

    // TODO: Replace these placeholders with your actual EmailJS credentials
    // You can find these in your EmailJS dashboard: https://dashboard.emailjs.com/
    const serviceID = "service_iytz0fq";
    const templateID = "template_ulvhwld";
    const publicKey = "vE5OHQY9GjZbzEIHY";

    try {
      await emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "deeplearningextra@gmail.com"
      }, publicKey);

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      const errorMessage = (error as any)?.text || "Failed to send message. Please try again later.";
      alert(errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div id="contact" className="section">
        <section className="contact-card-wrapper">

          <div className="contact-card-form-container">
            <span className="contact-card-heading">
              Get in <span className="text-accent">Touch</span>
            </span>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-card-input"
              value={formData.name}
              onChange={handleChange}
              disabled={isSending}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-card-input"
              value={formData.email}
              onChange={handleChange}
              disabled={isSending}
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Say Hello"
              className="contact-card-textarea"
              value={formData.message}
              onChange={handleChange}
              disabled={isSending}
            ></textarea>

            <div className="contact-card-button-group">
              <button className="contact-card-send" onClick={handleSend} disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
              </button>
              <button className="contact-card-reset" onClick={handleReset} disabled={isSending}>Reset</button>
            </div>
          </div>

          <div className="contact-card-grid">
            <FlipCard
              title="LinkedIn"
              frontImage="src/assets/in.png"
              targetUrl="https://www.linkedin.com/in/gsak2985"
              backContent={<img src="src/assets/Linked In.png" alt="LinkedIn QR" />}
            />
            <FlipCard
              title="GitHub"
              frontImage="src/assets/git.png"
              targetUrl="https://github.com/GSak29"
              backContent={<img src="src/assets/GitHub.png" alt="GitHub QR" />}
            />
            <FlipCard
              title="Email"
              backContent={
                <div className="email-card-content">
                  <span className="email-address">deeplearningextra@gmail.com</span>
                </div>
              }
              isWide={true}
            />
          </div>

        </section>
      </div>
    </>
  );
}
