import "./App.css";
import './index.css';

import "./components/fancybutton.css";
import FancyButton from "./components/fancybutton";
import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NextPage from "./pages/works";
import meImg from "./assets/me.png";

function Home() {
  const [ready, setReady] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  useEffect(() => {
    const onLoad = () => setTimeout(() => setReady(true), 300);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const bubbleCount = 10;
  const darkBubbleCount = 6;
  const bubbleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    type Tmr = { id: number; timeout: boolean };
    const timers: Tmr[] = [];
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    bubbleRefs.current.forEach((el) => {
      if (!el) return;
      el.style.top = `${rand(6, 90)}%`;
      el.style.left = `${rand(6, 90)}%`;
      const s = `${rand(80, 180)}px`;
      el.style.width = s;
      el.style.height = s;
      el.style.transitionDelay = `${rand(0, 3)}s`;
      el.style.setProperty("--moveDur", `${rand(12, 20)}s`);
      el.style.setProperty("--jellyDur", `${rand(8, 14)}s`);
      el.style.setProperty("--tx", `0px`);
      el.style.setProperty("--ty", `0px`);
      el.style.setProperty("--rot", `0deg`);
      el.style.setProperty("--scale", `1`);
    });
    const wander = (el: HTMLSpanElement) => {
      const tx = rand(-260, 260);
      const ty = rand(-260, 260);
      const rot = rand(-8, 8);
      const scale = rand(0.92, 1.08);
      el.style.setProperty("--tx", `${tx}px`);
      el.style.setProperty("--ty", `${ty}px`);
      el.style.setProperty("--rot", `${rot}deg`);
      el.style.setProperty("--scale", `${scale}`);
    };
    bubbleRefs.current.forEach((el) => {
      if (!el) return;
      const kick = () => wander(el);
      const startDelay = rand(0, 2000);
      const intervalMs = rand(9000, 16000);
      const t1 = window.setTimeout(() => {
        kick();
        const t2 = window.setInterval(kick, intervalMs);
        timers.push({ id: t2, timeout: false });
      }, startDelay);
      timers.push({ id: t1, timeout: true });
    });
    return () => {
      timers.forEach((t) => (t.timeout ? window.clearTimeout(t.id) : window.clearInterval(t.id)));
    };
  }, []);

  return (
    <>
      <div className="bubble-field">
        {Array.from({ length: bubbleCount + darkBubbleCount }).map((_, i) => (
          <span
            key={i}
            className={i < bubbleCount ? "bubble" : "bubble bubble--dark"}
            ref={(el) => { bubbleRefs.current[i] = el; }}
          />
        ))}
      </div>
      <div className={`container site-enter ${ready ? "ready" : ""}`}>
        <div className="left-section">
          <div className="subtitle">ECE . EMBEDDED SYSTEMS . SOFTWARE EXPLORER</div>
          <h1 className="headline">Hello, I'm Guru Sakthi S</h1>
          <p className="bio">
            &nbsp; &nbsp; &nbsp; &nbsp; A perfectionist with a determined mind, I explore the space
            between electronics and software. I learn quickly, work
            relentlessly, and build with intent.
          </p>
          <div className="button-group">
            <a
              href="/Resume.pdf"
              className="cv-button"
              onClick={(e) => {
                e.preventDefault();
                setShowPdf(true);
              }}
            >
              View My CV
              <i className="bi bi-eye-fill"></i>
            </a>
            <FancyButton />
          </div>
        </div>

        <div className="right-section">
          <div className="organic-shape">
            <div className="portrait-placeholder">
              <img src={meImg} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
      {showPdf && (
        <div className="popup-overlay" onClick={() => setShowPdf(false)}>
          <div className="popup-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close outside"
              onClick={() => setShowPdf(false)}
              aria-label="Close CV viewer"
            >
              ✕
            </button>
            <div className="popup-content pdf">
              <iframe
                className="pdf-frame"
                src="/Resume.pdf"
                title="Resume PDF"
              />
              <div className="pdf-actions">
                <a href="/Resume.pdf" download className="download-btn" aria-label="Download CV">Download &nbsp;&nbsp;<i className="bi bi-download"></i></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<NextPage />} />
    </Routes>
  );
}

export default App;
