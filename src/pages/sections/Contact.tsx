import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contacts.css";
import { contactData } from "../data/contact";
import FlipCard from "../../components/FlipCard";

import inImg from "../../assets/in.png";
import linkedInImg from "../../assets/linked-in.png";
import gitImg from "../../assets/git.png";
import githubImg from "../../assets/github.png";
import emailImg from "../../assets/email.png";

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
        message: `${message}\n\n--- Contact Details ---\nName: ${name}\nEmail: ${email}`,
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
              frontImage={inImg}
              targetUrl="https://www.linkedin.com/in/gsak2985"
              backContent={<img src={linkedInImg} alt="LinkedIn QR" />}
              className="card-linkedin"
            />
            <FlipCard
              title="GitHub"
              frontImage={gitImg}
              targetUrl="https://github.com/GSak29"
              backContent={<img src={githubImg} alt="GitHub QR" />}
              className="card-github"
            />
            <FlipCard
              title={contactData.frontTitle}
              frontImage={emailImg}
              targetUrl={`mailto:${contactData.mailtoEmail}`}
              description={contactData.frontDescription}
              backContent={
                <div className="email-card-content">
                  <span className="email-address">
                    <i className="bi bi-telephone-outbound-fill contact-icon"></i>
                    {contactData.phone}
                  </span>
                  <div className="coding-profiles">
                    {contactData.codingProfiles?.map((profile, index) => (
                      <div key={index} className="profile-row">
                        <div className="profile-info">
                          {profile.icon && <img src={profile.icon} alt={profile.name} className="profile-icon" />}
                          <span className="profile-name">{profile.name}</span>
                        </div>
                        <a href={profile.url} target="_blank" rel="noopener noreferrer" className="profile-link">
                          Link
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              }
              isWide={true}
              className="card-email"
            />
          </div>
        </section>
      </div>
    </>
  );
}
