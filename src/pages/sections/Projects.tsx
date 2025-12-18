import { projects } from "../data/projects";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div id="projects" className="section projects-container">
      
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          Some of the work I’ve built and experimented with.
        </p>
      </div>

      {/* Cards */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            
            {/* Image */}
            <div className="card__img">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Content */}
            <div className="card__descr-wrapper">
              <p className="card__title">{project.title}</p>
              <p className="card__descr">{project.description}</p>

              {/* Links */}
              <div className="card__links">
                <div>
                <i className="bi bi-link-45deg"></i>
                  <a className="link" href={project.previewLink}>
                    Preview
                  </a>
                </div>

                <div>
                  <i className="bi bi-github"></i>
                  <a className="link" href={project.codeLink}>
                    Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
