import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contacts.css";
import { contactData } from "../data/contact";

import inImg from "../../assets/in.png";
import gitImg from "../../assets/git.png";
import emailImg from "../../assets/email.png";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) { alert("Please fill in all fields"); return; }
    setIsSending(true);
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
      const errorMessage = (error as any)?.text || "Failed to send message. Please try again later.";
      alert(errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => setFormData({ name: "", email: "", message: "" });

  return (
    <>
      <div id="contact" className="section">
        <section className="contact-wrapper">

          {/* LEFT — Contact Form */}
          <div className="contact-form-box">
            <span className="contact-heading">
              Get in <span className="text-accent">Touch</span>
            </span>
            <input
              type="text" name="name" placeholder="Name"
              className="contact-input" value={formData.name}
              onChange={handleChange} disabled={isSending}
            />
            <input
              type="email" name="email" placeholder="Email"
              className="contact-input" value={formData.email}
              onChange={handleChange} disabled={isSending}
            />
            <textarea
              name="message" rows={5} placeholder="Say Hello…"
              className="contact-textarea" value={formData.message}
              onChange={handleChange} disabled={isSending}
            />
            <div className="contact-btn-row">
              <button className="btn-send" onClick={handleSend} disabled={isSending}>
                {isSending ? "Sending…" : "Send Message"}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
              <button className="btn-reset" onClick={handleReset} disabled={isSending}>Reset</button>
            </div>
          </div>

          {/* RIGHT — Bubble Orbs */}
          <div className="bubble-arena">


            {/* Top row: LinkedIn + GitHub side by side */}
            <div className="orb-row">
              <a
                href="https://www.linkedin.com/in/gsak2985"
                target="_blank"
                rel="noopener noreferrer"
                className="orb orb-linkedin"
                aria-label="LinkedIn"
              >
                <div className="orb-inner">
                  <div className="orb-sheen" />
                  <div className="orb-bounce" />
                  <div className="orb-glow" />
                  <img src={inImg} alt="LinkedIn" className="orb-icon" />
                  <span className="orb-label">LinkedIn</span>
                </div>
                <div className="orb-ring" />
              </a>

              <a
                href="https://github.com/GSak29"
                target="_blank"
                rel="noopener noreferrer"
                className="orb orb-github"
                aria-label="GitHub"
              >
                <div className="orb-inner">
                  <div className="orb-sheen" />
                  <div className="orb-bounce" />
                  <div className="orb-glow" />
                  <img src={gitImg} alt="GitHub" className="orb-icon" />
                  <span className="orb-label">GitHub</span>
                </div>
                <div className="orb-ring" />
              </a>
            </div>

            {/* Centre: Email orb (larger) */}
            <a
              href={`mailto:${contactData.mailtoEmail}`}
              className="orb orb-email"
              aria-label="Email"
            >
              <div className="orb-inner">
                <div className="orb-sheen" />
                <div className="orb-bounce" />
                <div className="orb-glow" />
                <img src={emailImg} alt="Email" className="orb-icon" />
                <span className="orb-label">Email</span>
                <span className="orb-sublabel">{contactData.mailtoEmail}</span>
              </div>
              <div className="orb-ring" />
            </a>

            {/* Bottom: Coding profile pills */}
            <div className="coding-chip-row">
              {contactData.codingProfiles?.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="coding-chip">
                  {p.icon && <img src={p.icon} alt={p.name} className="chip-icon" />}
                  <span>{p.name}</span>
                </a>
              ))}
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
