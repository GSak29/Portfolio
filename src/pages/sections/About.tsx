export default function About() {
  return (
    <div id="about" className="section">
      <div className="section-header section-header--center">
        <h1 className="section-title">A Little More About Me . . . <i className="bi bi-emoji-sunglasses"></i></h1>
    </div>
      <div className="about-stage">
        <div className="about-left">
          <div className="edu-grid cards-row">
            <div className="edu-card">
              <img className="edu-thumb" src="src/assets/kec.png" alt="Kongu Engineering College" />
              <div className="edu-title">Kongu Engineering College </div>
              <div className="edu-desc">B.E in Electronics and Communication Engineering </div>
              <div className="edu-desc">CGPA :: 9.04 </div>
              <a className="edu-link" href="https://kongu.ac.in/" aria-label="Explore High School">Explore <i className="bi bi-box-arrow-up-right"></i></a>
            </div>
            <div className="edu-card">
              <img className="edu-thumb" src="src/assets/bvb.png" alt="STEM Clubs" />
              <div className="edu-title">Bharathi Vidhya Bhavan Hr.sec School</div>
              <div className="edu-desc">Completed my Higher Studies Securing</div>
              <div className="edu-desc">12th Grade : 85.33% & 11th Grade : 92%</div>
              <a className="edu-link" href="https://thebvb.com/home-bvb-matric-hr-sec-school/" aria-label="Explore STEM Clubs">Explore <i className="bi bi-box-arrow-up-right"></i></a>
            </div>
            <div className="edu-card">
              <img className="edu-thumb" src="src/assets/ehkn.png" alt="Competitions" />
              <div className="edu-title">Erode Hindu Kalvi Nilayam <br/> Primary & Nursery School</div>
               <div className="edu-desc">Why not to mention..!!, this is the place <br/>where they put foundation for building myself</div>
              <a className="edu-link" href="https://www.ehkn.edu.in/" aria-label="Explore Competitions">Explore <i className="bi bi-box-arrow-up-right"></i></a>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="narrative-card">
            <div className="skills-title">Narrative</div>
            <div className="about-paras">
              <p>I work at the intersection of hardware and software, focusing on dependable systems with clear, maintainable code.</p>
              <p>My projects range from MCU firmware and tooling to frontend applications with smooth, responsive interfaces.</p>
              <p>I value practical design, predictable performance, and shipping products that feel refined without unnecessary complexity.</p>
            </div>
          </div>
        </div>

        <div className="about-photo" aria-hidden>
          <div className="organic-shape">
            <div className="portrait-placeholder">
              <img className="about-photo-img" src="src/assets/about.png" alt="About portrait" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
