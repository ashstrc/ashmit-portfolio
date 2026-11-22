import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const GITHUB = 'https://github.com/ashstrc';
const LINKEDIN = 'https://linkedin.com/in/ashmit-kumar-934b69278';
const EMAIL = 'ashmitkstrc2004@gmail.com';

const Arrow = ({ diagonal = false }) => <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
const Chip = ({ children }) => <span className="chip">{children}</span>;

const projects = [
  {
    id: '01', title: 'POXY', subtitle: 'AI-powered desktop assistant', tag: 'AI / AUTOMATION', category: 'AI / ML',
    description: 'My ongoing final-year project: a Python desktop assistant combining LLM-backed commands, voice interaction, clap activation, browser automation and document workflows.',
    skills: ['Python', 'Groq API', 'Playwright', 'Speech Recognition'],
    artwork: 'poxy', mark: 'P', link: null, button: 'In development'
  },
  {
    id: '02', title: 'Medical QA Chatbot', subtitle: 'Semantic medical information retrieval', tag: 'NLP / SEARCH', category: 'AI / ML',
    description: 'An NLP application using MedQuAD and Sentence Transformers to match user questions with relevant medical information using embeddings and cosine similarity.',
    skills: ['Python', 'Streamlit', 'Sentence Transformers', 'MedQuAD'],
    artwork: 'med', mark: '✳', link: 'https://github.com/ashstrc/ElevanceSkills-Data-Science-Internship/tree/main/Task-02-Medical-QA-Chatbot', button: 'View on GitHub'
  },
  {
    id: '03', title: 'Rakshak & Garud', subtitle: 'Wearable safety and monitoring', tag: 'IOT / EMBEDDED', category: 'Systems',
    description: 'Team-developed wearable prototype using ESP32-S3, ESP-NOW and sensor telemetry for safety monitoring, wireless communication and proximity estimation. National hackathon-winning work.',
    skills: ['ESP32-S3', 'C++', 'ESP-NOW', 'Sensors'],
    artwork: 'rak', mark: '⌁', link: null, button: 'Project overview'
  },
  {
    id: '04', title: 'SilentSOS / Aegis', subtitle: 'Discreet safety web application', tag: 'FULL-STACK', category: 'Full-Stack',
    description: 'Collaborative safety application work involving React interfaces and a Django REST backend, designed around discreet SOS-triggering and emergency communication concepts.',
    skills: ['React', 'Django REST', 'REST APIs', 'JavaScript'],
    artwork: 'sos', mark: '◎', link: GITHUB, button: 'Explore GitHub'
  },
];

const skillGroups = [
  { heading: 'AI & DATA', items: ['Python', 'Machine Learning', 'NLP', 'LLM Integration', 'Sentence Transformers', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { heading: 'FULL-STACK', items: ['React', 'JavaScript', 'Node.js', 'Express', 'Django REST', 'MongoDB', 'REST APIs', 'HTML & CSS'] },
  { heading: 'TOOLS & SYSTEMS', items: ['Git & GitHub', 'Playwright', 'Postman', 'Linux', 'ESP32', 'C++', 'Streamlit'] }
];

function App() {
  const [filter, setFilter] = useState('All work');
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const visible = filter === 'All work' ? projects : projects.filter(p => p.category === filter);
  const copyEmail = async () => { try { await navigator.clipboard.writeText(EMAIL); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { window.location.href = `mailto:${EMAIL}`; } };
  return (
    <>
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="site-header">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={() => setMenu(false)}>AK<span>.</span><span className="logo-note"> / portfolio</span></a>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? '✕' : '☰'}</button>
          <div className={`nav-links ${menu ? 'open' : ''}`}>
            {['About','Work','Skills','Experience'].map(item => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenu(false)}>{item}</a>)}
            <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>Let’s talk <Arrow diagonal/></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-content">
            <div className="available"><i/> OPEN TO INTERNSHIPS & EARLY-CAREER ROLES</div>
            <div className="eyebrow">HELLO, I’M ASHMIT KUMAR <span className="mini-spark">✳</span></div>
            <h1>Building what’s <span>next</span><br/>with code & AI<span className="period">.</span></h1>
            <p className="hero-text">AI/ML enthusiast and full-stack developer turning curious ideas into practical tools — from intelligent desktop assistants to software that makes a difference.</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">Explore my work <Arrow diagonal/></a>
              <a href="#contact" className="btn btn-outline">Get in touch <Arrow/></a>
            </div>
            <div className="hero-meta"><span><b>2027</b> Expected graduate</span><span className="meta-rule"/><span><b>India</b> Open to remote opportunities</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-glow"/>
            <div className="portrait-frame"><img src="/ashmit-photo.png" alt="Portrait of Ashmit Kumar"/></div>
            <div className="float-card fc-top"><span className="float-icon">✳</span><span><b>AI + Engineering</b><small>Thinking • Building • Iterating</small></span></div>
            <div className="float-card fc-bottom"><div className="float-code">{'{ }'}</div><span><b>Python / React</b><small>Ideas into working products</small></span></div>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          </div>
        </section>

        <div className="ticker"><div className="ticker-inner">PYTHON <span>✳</span> GENERATIVE AI <span>✳</span> FULL-STACK DEVELOPMENT <span>✳</span> NLP <span>✳</span> AUTOMATION <span>✳</span> PYTHON <span>✳</span> GENERATIVE AI <span>✳</span> FULL-STACK DEVELOPMENT <span>✳</span></div></div>

        <section className="section wrap about" id="about">
          <div className="section-label"><span>01 / ABOUT ME</span></div>
          <div className="about-grid">
            <h2>Curious by nature.<br/><span>Builder by choice.</span></h2>
            <div><p>I’m a final-year B.Tech Computer Science & Engineering student at Tula’s Institute, Dehradun, graduating in 2027.</p><p>I enjoy exploring the space where <strong>AI, software engineering and real-world problems</strong> meet. Whether I’m building voice-based automation with POXY, experimenting with NLP, or collaborating on a wearable safety system, I learn best by making things work.</p><p>I'm looking for an opportunity to contribute to meaningful products, learn from experienced engineers, and keep improving my craft.</p><div className="about-footer"><span>Dehradun, India</span><span>•</span><span>Open to opportunities</span></div></div>
          </div>
        </section>

        <section className="section projects-section" id="work">
          <div className="wrap"><div className="section-label"><span>02 / SELECTED WORK</span><span className="muted-label">A FEW THINGS I'VE BUILT</span></div>
            <div className="section-heading"><div><h2>Projects that <em>speak.</em></h2><p>Hands-on work across AI, full-stack software and embedded systems.</p></div><span className="project-count">( 04 PROJECTS )</span></div>
            <div className="filters" role="group" aria-label="Project filters">{['All work', 'AI / ML', 'Full-Stack', 'Systems'].map(f => <button key={f} className={f===filter?'active':''} aria-pressed={f===filter} onClick={()=>setFilter(f)}>{f}</button>)}</div>
            <div className="project-grid">{visible.map(p => <article className="project-card" key={p.id}>
              <div className={`art ${p.artwork}`}><div className="art-grid"/><div className="art-ring ring-a"/><div className="art-ring ring-b"/><span className="art-symbol">{p.mark}</span><div className="art-caption">{p.tag}</div><span className="art-index">/{p.id}</span></div>
              <div className="project-info"><div className="project-top"><span>{p.tag}</span><span>{p.id} / 04</span></div><h3>{p.title}</h3><div className="subtitle">{p.subtitle}</div><p>{p.description}</p><div className="project-skills">{p.skills.map(s=><Chip key={s}>{s}</Chip>)}</div>{p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">{p.button} <Arrow diagonal/></a> : <span className="project-link no-link">{p.button}</span>}</div>
            </article>)}</div>
          </div>
        </section>

        <section className="section wrap skills-section" id="skills">
          <div className="section-label"><span>03 / TOOLKIT</span></div><div className="section-heading"><div><h2>The tools behind <em>the work.</em></h2><p>Technologies I've used across my projects and learning.</p></div></div>
          <div className="skills-grid">{skillGroups.map((g,i)=><div className="skill-box" key={g.heading}><div className="skill-index">0{i+1} <span>↗</span></div><h3>{g.heading}</h3><div className="skills-cloud">{g.items.map(s=><span key={s}>{s}</span>)}</div></div>)}</div>
        </section>

        <section className="section experience-section" id="experience"><div className="wrap"><div className="section-label"><span>04 / JOURNEY</span></div><div className="section-heading"><div><h2>Learning by <em>doing.</em></h2><p>A few milestones along the way.</p></div></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-date">JUL — SEP 2026</div><div><div className="timeline-type">EXPERIENCE</div><h3>Data Science Intern <span>↗</span></h3><p className="timeline-company">ElevanceSkills Technology Private Limited</p><p>Worked with Python and machine learning workflows, including an NLP-based Medical QA Chatbot using semantic retrieval.</p></div></div>
            <div className="timeline-item"><div className="timeline-date">HACKATHONS</div><div><div className="timeline-type">RECOGNITION</div><h3>Hackathon Winner & Runner-up <span>↗</span></h3><p className="timeline-company">Hackverse 3.0 • State-level AI & Coding Hackathon</p><p>Built and presented team projects under time constraints, combining practical engineering with collaborative problem-solving.</p></div></div>
            <div className="timeline-item"><div className="timeline-date">2023 — 2027</div><div><div className="timeline-type">EDUCATION</div><h3>B.Tech, Computer Science & Engineering <span>↗</span></h3><p className="timeline-company">Tula's Institute, Dehradun</p><p>Learning software engineering fundamentals while exploring applied AI, machine learning and full-stack development.</p></div></div>
          </div>
        </div></section>

        <section className="section contact-section wrap" id="contact"><div className="contact-panel"><div className="contact-grid"/><div className="contact-top"><span className="section-label">05 / LET’S CONNECT</span><span className="contact-star">✳</span></div><div className="contact-body"><h2>Have an idea?<br/><em>Let’s build it.</em></h2><p>Open to AI/ML, GenAI, Python and full-stack internships — and conversations with people building thoughtful technology.</p><div className="contact-actions"><a href={`mailto:${EMAIL}`} className="btn btn-light">Say hello <Arrow diagonal/></a><button className="btn btn-contact-outline" onClick={copyEmail}>{copied ? 'Email copied ✓' : 'Copy email'} <span aria-hidden="true">⧉</span></button></div></div></div>
        </section>
      </main>
      <footer className="footer wrap"><a href="#home" className="logo">AK<span>.</span></a><p>© {new Date().getFullYear()} Ashmit Kumar. Built with React & curiosity.</p><div><a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={`mailto:${EMAIL}`}>Email ↗</a></div></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
