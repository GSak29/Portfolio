import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './works.css';

export default function NextPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Handle route changes with class toggling to trigger CSS transitions
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.classList.remove('loaded');
    // Force a reflow to allow CSS transitions to register the state change
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('loaded');
      });
    });
  }, [location]);

  // Initial page load handler
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onLoad = () => {
      el.classList.remove('loaded');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add('loaded');
        });
      });
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const bubbleCount = 12;
  const darkBubbleCount = 8;
  const bubbleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  
  // Bubble animation logic
  useEffect(() => {
    type Tmr = { id: number; timeout: boolean };
    const timers: Tmr[] = [];
    
    // Force a small delay to ensure DOM elements are mounted
    const delayTimer = setTimeout(() => {
      const rand = (min: number, max: number) =>
        Math.random() * (max - min) + min;
      
      // initialize positions/sizes without setState
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
    }, 100);
    
    return () => {
      clearTimeout(delayTimer);
      timers.forEach((tmr) => {
        if (tmr.timeout) {
          clearTimeout(tmr.id);
        } else {
          clearInterval(tmr.id);
        }
      });
    };
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <>
      <main ref={rootRef} className={`nextpage page-anim`} aria-labelledby="nextpage-title">
        <div className="bubble-field">
          {Array.from({ length: bubbleCount + darkBubbleCount }).map((_, i) => (
            <span
              key={i}
              className={i < bubbleCount ? "bubble" : "bubble bubble--dark"}
              ref={(el) => { if (el) bubbleRefs.current[i] = el; }}
            />
          ))}
        </div>
      <header className="nextpage-hero">
        <h1 id="nextpage-title" className="anim-item" data-side="left">Explore More</h1>
        <p className="lead anim-item" data-side="right">A simple, fast page for showcasing additional projects and details.</p>
        <div className="hero-actions anim-item" data-side="left">
          <button className="btn primary" onClick={handleBackHome}>Back to Home</button>
          <a className="btn ghost" href="#projects">See Projects</a>
        </div>
      </header>

      <section id="projects" className="nextpage-grid" aria-label="Featured projects">
        <article className="card anim-item" data-side="left">
          <div className="card-icon">📁</div>
          <h3 className="card-title">Project One</h3>
          <p className="card-body">Brief description of project one — technologies used, short summary.</p>
          <a className="card-link" href="#">Read more</a>
        </article>

        <article className="card anim-item" data-side="right">
          <div className="card-icon">🏆</div>
          <h3 className="card-title">Achievements</h3>
          <p className="card-body">Highlights and notable achievements, awards or recognitions.</p>
          <a className="card-link" href="#">Read more</a>
        </article>

        <article className="card anim-item" data-side="left">
          <div className="card-icon">🧾</div>
          <h3 className="card-title">Certifications</h3>
          <p className="card-body">List of certifications and short info on each credential.</p>
          <a className="card-link" href="#">Read more</a>
        </article>

        <article className="card anim-item" data-side="right">
          <div className="card-icon">💡</div>
          <h3 className="card-title">Ideas</h3>
          <p className="card-body">Mini descriptions of ideas or experiments you're working on.</p>
          <a className="card-link" href="#">Read more</a>
        </article>
      </section>

      <footer className="nextpage-footer anim-item" data-side="left">
        <p>Want this page wired into the app? Import and route it inside `App.tsx` or your router.</p>
      </footer>
    </main>
    </>
  );
}
