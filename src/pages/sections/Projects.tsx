import { useState } from "react";
import "../styles/Achievements.css";
import { achievements } from "../data/AchievementsData";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openTV = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };

  const closeTV = () => setIsOpen(false);

  const next = () =>
    setIndex((prev) => (prev + 1) % achievements.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + achievements.length) % achievements.length);

  const current = achievements[index];

  return (
    <div id="projects" className="section">
      <div className="section-header section-header--center">
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">Explore project cards; open details on the TV.</p>
      </div>

      <section className="ach-grid">
        {achievements.map((item, i) => (
          <article
            key={i}
            className="ach-card"
            style={{ ["--card-accent" as any]: "rgba(255,149,0,0.18)" }}
          >
            <div className="ach-hero">
              <img className="ach-img" src={item.image} alt={item.title} />
              <span className="ach-grade" />
            </div>
            <div className="ach-content">
              <h2 className="ach-title">{item.title}</h2>
              <p className="ach-desc">{item.desc}</p>
              <button
                onClick={() => openTV(i)}
                className="ach-btn"
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </section>

      {isOpen && (
        <section className="overlay">
          <div className="tv-container">
            <div className="tv-screen">
              <div className="static" />

              <div className="tv-content">
                <div
                  className="tv-image"
                  style={{ backgroundImage: `url("${current.image}")` }}
                />
                <div className="tv-text">
                  <h2>{current.title}</h2>
                  <p>{current.desc}</p>
                </div>
              </div>
            </div>

            <div className="tv-controls">
              <button className="tv-btn" onClick={prev}>⏮</button>
              <button className="tv-btn power-btn" onClick={closeTV}>⏻</button>
              <button className="tv-btn" onClick={next}>⏭</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
