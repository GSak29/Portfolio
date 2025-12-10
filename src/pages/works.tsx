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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible && visible.target && (visible.target as HTMLElement).id) {
          setActiveId((visible.target as HTMLElement).id);
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
      <nav className="works__nav fixed top-0 left-0 right-0 z-50" aria-label="Works navigation">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2">
          <button
            className={`works__hamburger ${menuOpen ? 'is-open' : ''} sm:hidden`}
            aria-controls="works-navlinks"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="hamburger-box" aria-hidden>
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </span>
          </button>

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
        </div>
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
