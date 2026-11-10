import { profile, stats, projects, skills, tools, experience, education } from "./page.js";

export default function Page() {
  return (
    <>
      <section className="hero section" id="home">
        <p className="eyebrow">HELLO, I'M {profile.name.toUpperCase()}</p>
        <h1>{profile.role}<br /><span>building for the web.</span></h1>
        <p className="intro">{profile.tagline} {profile.intro}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore my work <span>↗</span></a>
          <a className="button secondary" href={`mailto:${profile.email}`}>Get in touch</a>
        </div>
        <p className="location">Based in {profile.location}</p>
        <div className="stats">{stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading"><p className="eyebrow">SELECTED WORK</p><h2>Projects<span>.</span></h2></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="eyebrow">{project.tag}</p><h3>{project.title}</h3>
              <p>{project.description}</p><p className="project-role">{project.role}</p>
              <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Visit project ↗</a>}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading"><p className="eyebrow">WHAT I WORK WITH</p><h2>Skills<span>.</span></h2></div>
        <div className="skills-grid">
          {skills.map((group) => <article className="skill-card" key={group.group}><h3>{group.group}</h3>{group.items.map((item) => <div className="skill-line" key={item.name}><span>{item.name}</span><small>{item.level}</small></div>)}</article>)}
        </div>
        <div className="tools-row"><p className="eyebrow">TOOLS</p><div className="tags">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
      </section>

      <section className="section" id="resume">
        <div className="section-heading"><p className="eyebrow">MY JOURNEY</p><h2>Experience & education<span>.</span></h2></div>
        {experience.map((item) => <article className="experience-card" key={item.company}><div><h3>{item.role}</h3><p className="muted">{item.company} · {item.period}</p></div><p>{item.description}</p></article>)}
        <article className="education-card"><div><p className="eyebrow">EDUCATION</p><h3>{education.degree}</h3><p>{education.school}</p></div><span>{education.period}</span></article>
      </section>
    </>
  );
}
