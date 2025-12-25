import cImg from "../../assets/c.png";
import dsaImg from "../../assets/dsa.png";
import reactImg from "../../assets/react.svg";
import eiotImg from "../../assets/eiot.png";
import linuxImg from "../../assets/linux.png";
import gitImg from "../../assets/git.png";
import projectsImg from "../../assets/unwanted/projects.png"; // Fixed path based on search
import psImg from "../../assets/ps.png";
import ctImg from "../../assets/ct.png";
import dmImg from "../../assets/dm.png";
import twImg from "../../assets/tw.png";
import lsImg from "../../assets/ls.png";
import comImg from "../../assets/com.png";
import aboutImg from "../../assets/about.png";

export default function Skills() {
  const icon = (name: string) => {
    const map: Record<string, string> = {
      'Programming': cImg,
      'Data Structures & Algorithms': dsaImg,
      'Web & App Development': reactImg,
      'Embedded Systems & IoT': eiotImg,
      'Linux & Developer Tools': linuxImg,
      'Version Control': gitImg,
    }
    return map[name] ?? projectsImg
  }
  const softIcon = (name: string) => {
    const map: Record<string, string> = {
      'Problem Solving': psImg,
      'Critical Thinking': ctImg,
      'Debugging Mindset': dmImg,
      'Teamwork': twImg,
      'Leadership': lsImg,
      'Communication': comImg,
    }
    return map[name] ?? aboutImg
  }
  const techCards = [
    { title: 'Programming', subs: ['C', 'C++', 'Java', 'Python'] },
    { title: 'Data Structures & Algorithms', subs: ['C', 'C++', 'Java'] },
    { title: 'Web & App Development', subs: ['HTML', 'CSS', 'JavaScript', 'TypeScript (TSX)', 'Flutter'] },
    { title: 'Embedded Systems & IoT', subs: ['Embedded C', 'ESP32', 'Raspberry Pi'] },
    { title: 'Linux & Developer Tools', subs: ['Linux', 'CLI', 'Git'] },
    { title: 'Version Control', subs: ['Git', 'GitHub'] },
  ]
  const soft = [
    'Problem Solving',
    'Critical Thinking',
    'Debugging Mindset',
    'Teamwork',
    'Leadership',
    'Communication',
  ]
  return (
    <>
      <div id="skills" className="skills-intro">
        <h5 className="intro-title">Knowledge<span className="text-amber-600"> + </span>Experience<span className="text-amber-600"> == </span>Skills</h5>
      </div>
      <div className="section skills-frame">
        <div className="skills-stack">
          <div className="section-header section-header--center">
            <h2 className="section-title">What I Build</h2>
            <p className="section-desc">Compact overview of core capabilities.</p>
          </div>
          <div className="skills-grid skills-grid--tech" aria-label="Technical skills">
            {techCards.map(({ title, subs }) => (
              <div key={title} className="skill-card" tabIndex={0}>
                <img className="skill-icon" src={icon(title)} alt={`${title} icon`} />
                <div className="skill-label">{title}</div>
                <div className="skill-subs" aria-label={`${title} sub-skills`}>
                  {subs.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-stack">
          <div className="section-header section-header--center">
            <h2 className="section-title">How I Work</h2>
            <p className="section-desc">Minimalist view of key soft skills.</p>
          </div>
          <div className="skills-grid skills-grid--soft" aria-label="Soft skills">
            {soft.map((name) => (
              <div key={name} className="skill-card" tabIndex={0}>
                <img
                  className="skill-icon"
                  src={softIcon(name)}
                  alt={`${name} icon`}
                />
                <div className="skill-label">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
