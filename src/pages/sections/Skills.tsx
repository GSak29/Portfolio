export default function Skills() {
  const icon = (name: string) => {
    const map: Record<string, string> = {
      'Programming': 'src/assets/c.png',
      'Data Structures & Algorithms': 'src/assets/dsa.png',
      'Web & App Development': 'src/assets/react.svg',
      'Embedded Systems & IoT': 'src/assets/eiot.png',
      'Linux & Developer Tools': 'src/assets/linux.png',
      'Version Control': 'src/assets/git.png',
    }
    return map[name] ?? 'src/assets/projects.png'
  }
  const softIcon = (name: string) => {
    const map: Record<string, string> = {
      'Problem Solving': 'src/assets/ps.png',
      'Critical Thinking': 'src/assets/ct.png',
      'Debugging Mindset': 'src/assets/dm.png',
      'Teamwork': 'src/assets/tw.png',
      'Leadership': 'src/assets/ls.png',
      'Communication': 'src/assets/com.png',
    }
    return map[name] ?? 'src/assets/about.png'
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
