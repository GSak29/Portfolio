import { useEffect, useMemo, useRef, useState } from 'react';
import './works.css';
import About from './sections/About';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Papers from './sections/Papers';
import Contact from './sections/Contact';

type NavItem = { id: string; label: string };

export default function Works() {
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
      el.style.setProperty('--moveDur', `${rand(12, 20)}s`);
      el.style.setProperty('--jellyDur', `${rand(8, 14)}s`);
      el.style.setProperty('--tx', `0px`);
      el.style.setProperty('--ty', `0px`);
      el.style.setProperty('--rot', `0deg`);
      el.style.setProperty('--scale', `1`);
    });
    const wander = (el: HTMLSpanElement) => {
      const tx = rand(-260, 260);
      const ty = rand(-260, 260);
      const rot = rand(-8, 8);
      const scale = rand(0.92, 1.08);
      el.style.setProperty('--tx', `${tx}px`);
      el.style.setProperty('--ty', `${ty}px`);
      el.style.setProperty('--rot', `${rot}deg`);
      el.style.setProperty('--scale', `${scale}`);
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
  const navItems: NavItem[] = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'certifications', label: 'Certifications' },
      { id: 'projects', label: 'Projects' },
      { id: 'papers', label: 'Papers' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>('about');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < 640 : true);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sec = entry.target as HTMLElement;
          if (entry.isIntersecting) sec.classList.add('is-visible');
          else sec.classList.remove('is-visible');
        });
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible && visible.target) {
          const idEl = (visible.target as HTMLElement).querySelector('[id]') as HTMLElement | null;
          if (idEl && idEl.id) setActiveId(idEl.id);
        }
      },
      { root: null, threshold: [0.2, 0.5, 0.8], rootMargin: '0px 0px -30% 0px' }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      const section = el?.closest('section') as HTMLElement | null;
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [navItems]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    const target = (el?.closest('section') as HTMLElement | null) ?? el;
    if (target && 'scrollIntoView' in target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const items = Array.from(e.currentTarget.querySelectorAll<HTMLAnchorElement>('a'));
    const idx = items.findIndex((n) => n === document.activeElement);
    const nextIdx = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? idx + 1 : idx - 1;
    const target = items[(nextIdx + items.length) % items.length];
    target?.focus();
  };

  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="bubble-field">
        {Array.from({ length: bubbleCount + darkBubbleCount }).map((_, i) => (
          <span
            key={i}
            className={i < bubbleCount ? 'bubble' : 'bubble bubble--dark'}
            ref={(el) => { bubbleRefs.current[i] = el; }}
          />
        ))}
      </div>
      <nav className="works__nav" aria-label="Works navigation">
        <div className="works__nav-inner">
          <a className="Btn back-home" href="/" aria-label="Back to Home">
            <span className="svgWrapper"><i className="bi bi-house svgIcon" /></span>
            <span className="text">Home</span>
          </a>
          <ul
            id="works-navlinks"
            className={`works__nav-links ${menuOpen ? 'is-open' : ''}`}
            role="menubar"
            aria-hidden={!menuOpen && window.innerWidth < 640}
            onKeyDown={handleMenuKeyDown}
          >
            {navItems.map(({ id, label }) => (
              <li key={id} role="none">
                <a
                  role="menuitem"
                  className={`navlink ${activeId === id ? 'active' : ''}`}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`works__hamburger ${menuOpen ? 'is-open' : ''}`}
            aria-controls="works-navlinks"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
          </button>
        </div>
        {isMobile && (
          <aside className={`works__drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
            <div className="drawer-header">
              <button className="drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <i className="bi bi-x" />
              </button>
            </div>
            <ul className="drawer-links" role="menubar">
            {navItems.map(({ id, label }) => (
              <li key={id} role="none">
                <a
                  role="menuitem"
                  className={`navlink ${activeId === id ? 'active' : ''}`}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
                >
                  {label}
                </a>
              </li>
            ))}
            </ul>
          </aside>
        )}
        {isMobile && menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />}
      </nav>

      <main className="works-grid scroll-smooth pt-14 sm:pt-20 px-4 sm:px-6">
        <section
          className="works__cell section-wrapper"
          aria-label="About"
        >
          <About />
        </section>
        <section
          className="works__cell section-wrapper"
          aria-label="Skills"
        >
          <Skills />
        </section>
        <section
          className="works__cell section-wrapper"
          aria-label="Achievements"
        >
          <Achievements />
        </section>
        <section
          className="works__cell section-wrapper"
          aria-label="Certifications"
        >
          <Certifications />
        </section>
        <section
          className="works__cell section-wrapper"
          aria-label="Projects"
        >
          <div className="card-wrapper">
            <Projects />
          </div>
        </section>
        <section
          className="works__cell section-wrapper"
          aria-label="Papers"
        >
          <div className="card-wrapper">
            <Papers />
          </div>
        </section>
        <section
          className="works__cell section-wrapper"
          aria-label="Contact"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}
