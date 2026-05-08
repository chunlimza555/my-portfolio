import React from 'react';
import './App.css';
import profilePic from './profile.jpg'; /* THIS IS THE FIX! */

function App() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="nav-logo">Chun Lim</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-tag">Open to internship opportunities</div>
              <h1 className="hero-name">Hi, I'm <span>Chun Lim</span><br />Mongkonkrit</h1>
              <p className="hero-sub">AI & Machine Learning researcher · Full-Stack Developer · Based in Adelaide, SA — building intelligent systems that bridge data science and real-world applications.</p>
              <div className="hero-btns">
                <a href="#contact" className="btn-primary">Get in touch</a>
                <a href="#projects" className="btn-outline">View my work</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="avatar-ring">
                {/* THIS IS WHERE THE IMAGE IS RENDERED USING THE VARIABLE */}
                <img src={profilePic} alt="Chun Lim" className="avatar-image" />
              </div>
              <div className="float-badge b1">
                <strong>MSc Computer Science</strong>
                Flinders University · AI
              </div>
              <div className="float-badge b2">
                <strong>Azure AZ-900</strong>
                Certified ☁️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="alt-bg">
        <div className="container">
          <div className="section-label">About me</div>
          <h2 className="section-title">A little bit <em>about me</em></h2>
          <div className="section-divider"></div>
          <div className="about-grid">
            <div className="about-text">
              <p>I am a passionate and adaptable Computer Science graduate student specialising in Artificial Intelligence at Flinders University, Adelaide. My journey spans from logistics and international trade to machine learning research and full-stack web development — giving me a uniquely broad perspective on problem-solving.</p>
              <p>My current research focuses on developing machine learning algorithms to predict speakers' emotional states from speech patterns — work that sits at the intersection of signal processing, deep learning, and human-centred AI.</p>
              <p>I am driven by the challenge of turning complex data into meaningful, real-world applications — whether that's a neural network that understands emotion or a web app that serves hundreds of users.</p>
              <div className="about-stats">
                <div className="stat-card"><div className="stat-num">3+</div><div className="stat-label">Years in tech</div></div>
                <div className="stat-card"><div className="stat-num">2</div><div className="stat-label">IT qualifications</div></div>
                <div className="stat-card"><div className="stat-num">200+</div><div className="stat-label">Students supported</div></div>
                <div className="stat-card"><div className="stat-num">5+</div><div className="stat-label">Projects built</div></div>
              </div>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="hi-icon">🧠</div>
                <div className="hi-text">
                  <h4>AI & Machine Learning</h4>
                  <p>Deep learning with PyTorch, scikit-learn, data analytics and speech emotion recognition research.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">💻</div>
                <div className="hi-text">
                  <h4>Full-Stack Development</h4>
                  <p>React, Node.js, Express, MySQL — building end-to-end applications from database design to UI.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">☁️</div>
                <div className="hi-text">
                  <h4>Cloud & Infrastructure</h4>
                  <p>Microsoft Azure (AZ-900 certified) and AWS experience in cloud-based deployment and services.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">🌏</div>
                <div className="hi-text">
                  <h4>Cross-cultural Communication</h4>
                  <p>Background in international trade and logistics across Thailand and Australia, fluent in English and Thai.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research">
        <div className="container">
          <div className="section-label">Academic research</div>
          <h2 className="section-title">Current <em>research</em></h2>
          <div className="section-divider"></div>
          <div className="research-card">
            <h3>Developing a Machine Learning Algorithm for Predicting a Speaker's Emotional Status and Tendency</h3>
            <div className="research-meta">Flinders University · Supervisor: Associate Professor Russell Brinkworth · 2025 – Present</div>
            <p className="research-desc">
              This research aims to develop a machine learning system capable of accurately predicting the emotional state and emotional tendencies of speakers from their speech patterns. The work has direct applications in healthcare — helping providers monitor patient emotional wellbeing during consultations, de-escalate tense situations, and deliver more empathetic, person-centred care. An extension goal includes making the system multilingual and capable of real-time monitoring.
            </p>
            <div className="research-tags">
              <span className="tag">Speech Emotion Recognition</span>
              <span className="tag">Deep Learning</span>
              <span className="tag">Signal Processing</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Feature Extraction</span>
              <span className="tag">Classification Models</span>
              <span className="tag">Temporal Prediction</span>
              <span className="tag">Healthcare AI</span>
            </div>
            <div className="research-outcomes">
              <div className="outcome-item"><div className="outcome-dot"></div><p>Emotion classification model from speech data</p></div>
              <div className="outcome-item"><div className="outcome-dot"></div><p>Predictive model for future emotional states</p></div>
              <div className="outcome-item"><div className="outcome-dot"></div><p>Curated annotated speech dataset</p></div>
              <div className="outcome-item"><div className="outcome-dot"></div><p>Joint research publication</p></div>
              <div className="outcome-item"><div className="outcome-dot"></div><p>Real-time monitoring system (extension)</p></div>
              <div className="outcome-item"><div className="outcome-dot"></div><p>Multilingual operation (extension goal)</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="alt-bg">
        <div className="container">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured <em>projects</em></h2>
          <div className="section-divider"></div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🏋️</div>
              <h3>High Street Gym Web App</h3>
              <p>A full-stack gym management system with role-based access for members, trainers, and admins. Supports class bookings, blog posts, user management, and full CRUD operations — rebuilt from a legacy codebase using modern tools.</p>
              <div className="project-stack">
                <span className="stack-tag">React.js</span><span className="stack-tag">Node.js</span><span className="stack-tag">Express</span><span className="stack-tag">MySQL</span><span className="stack-tag">Tailwind</span><span className="stack-tag">DaisyUI</span><span className="stack-tag">bcrypt</span><span className="stack-tag">UUIDv4</span>
              </div>
              <a href="https://github.com/chunlimza555/High_Street_Gym_With_React" className="project-link">View on GitHub →</a>
            </div>
            <div className="project-card">
              <div className="project-icon">🧠</div>
              <h3>Speech Emotion Recognition (Research)</h3>
              <p>An ML model developed as part of my Masters research to classify speaker emotional states from audio data. Involves feature extraction from speech signals, deep learning model training, and temporal trend prediction.</p>
              <div className="project-stack">
                <span className="stack-tag">Python</span><span className="stack-tag">PyTorch</span><span className="stack-tag">Signal Processing</span><span className="stack-tag">scikit-learn</span>
              </div>
              <a href="#research" className="project-link">Read more →</a>
            </div>
            <div className="project-card">
              <div className="project-icon">📊</div>
              <h3>Data Analytics Projects</h3>
              <p>Various data analytics and machine learning projects completed during the Master of Computer Science program, involving data preprocessing, model evaluation, and visualisation using Python ecosystem tools.</p>
              <div className="project-stack">
                <span className="stack-tag">Python</span><span className="stack-tag">Pandas</span><span className="stack-tag">scikit-learn</span><span className="stack-tag">Matplotlib</span><span className="stack-tag">Jupyter</span>
              </div>
              <a href="https://github.com/chunlimza555" className="project-link">View GitHub →</a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div className="section-label">Work history</div>
          <h2 className="section-title">Professional <em>experience</em></h2>
          <div className="section-divider"></div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-role">Casual Professional — Career Crew Member</div>
                <div className="timeline-date">Feb 2026 – Present</div>
              </div>
              <div className="timeline-org">Flinders University, Adelaide</div>
              <ul className="timeline-desc">
                <li>Supported 200+ students during Career Festival and Orientation events, improving student engagement with employers.</li>
                <li>Acted as liaison between students and employers, facilitating networking and career development opportunities.</li>
                <li>Advised students on resume enhancement, LinkedIn optimisation, and skill development pathways.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-role">Three Topics Representative</div>
                <div className="timeline-date">Aug 2025 – Nov 2025</div>
              </div>
              <div className="timeline-org">Flinders University Student Association (FUSA)</div>
              <ul className="timeline-desc">
                <li>Volunteered as a student representative, advocating on behalf of the student body across three topic areas.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-role">Import Specialist</div>
                <div className="timeline-date">Mar 2021 – Aug 2022</div>
              </div>
              <div className="timeline-org">Hayakawa Electronics (Thailand) Co., LTD</div>
              <ul className="timeline-desc">
                <li>Managed complex import/export logistics including HS Code verification, duty tax calculations, and insurance arrangements.</li>
                <li>Coordinated with international shipping agencies including DHL and FedEx, and communicated with Thai Customs.</li>
                <li>Received a Kaizen Award for a process improvement that solved a critical workflow bottleneck and increased productivity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="alt-bg">
        <div className="container">
          <div className="section-label">Academic background</div>
          <h2 className="section-title">My <em>education</em></h2>
          <div className="section-divider"></div>
          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-current">Current</div>
              <div className="edu-year">2025 – Present</div>
              <div className="edu-degree">Master of Computer Science with Research Component</div>
              <div className="edu-school">Flinders University, Adelaide</div>
              <span className="edu-field">Artificial Intelligence</span>
            </div>
            <div className="edu-card">
              <div className="edu-year">Graduated 2024</div>
              <div className="edu-degree">Diploma of Information Technology</div>
              <div className="edu-school">TAFE Queensland</div>
              <span className="edu-field">Full Stack Web Development</span>
            </div>
            <div className="edu-card">
              <div className="edu-year">Graduated 2023</div>
              <div className="edu-degree">Certificate III of Information Technology</div>
              <div className="edu-school">TAFE Queensland</div>
              <span className="edu-field">Full Stack Web Development</span>
            </div>
            <div className="edu-card">
              <div className="edu-year">Graduated 2019</div>
              <div className="edu-degree">Bachelor of Business Administration</div>
              <div className="edu-school">Burapha University, Thailand</div>
              <span className="edu-field">Logistics & Cross-Border Trade</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">Skills & <em>tools</em></h2>
          <div className="section-divider"></div>
          <div className="skills-grid">
            <div className="skill-group">
              <h4>Programming</h4>
              <div className="skill-pills">
                <span className="skill-pill">Python</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">SQL</span>
                <span className="skill-pill">HTML</span>
                <span className="skill-pill">CSS</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>AI & Machine Learning</h4>
              <div className="skill-pills">
                <span className="skill-pill">PyTorch</span>
                <span className="skill-pill">scikit-learn</span>
                <span className="skill-pill">Deep Learning</span>
                <span className="skill-pill">Data Analytics</span>
                <span className="skill-pill">Signal Processing</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Frontend</h4>
              <div className="skill-pills">
                <span className="skill-pill">React.js</span>
                <span className="skill-pill">Tailwind CSS</span>
                <span className="skill-pill">DaisyUI</span>
                <span className="skill-pill">React Router</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Backend & Database</h4>
              <div className="skill-pills">
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">Express.js</span>
                <span className="skill-pill">MySQL</span>
                <span className="skill-pill">MongoDB</span>
                <span className="skill-pill">REST APIs</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Cloud & Tools</h4>
              <div className="skill-pills">
                <span className="skill-pill">AWS</span>
                <span className="skill-pill">Azure</span>
                <span className="skill-pill">Git</span>
                <span className="skill-pill">GitHub</span>
                <span className="skill-pill">MySQL Workbench</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Certifications</h4>
              <div className="cert-row"><div className="cert-icon">☁️</div><span className="cert-name">Microsoft Azure Fundamentals AZ-900</span></div>
              <div className="cert-row"><div className="cert-icon">📋</div><span className="cert-name">Google Project Management Certificate</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="alt-bg">
        <div className="container">
          <div className="section-label">Let's connect</div>
          <h2 className="section-title">Get in <em>touch</em></h2>
          <div className="section-divider"></div>
          <div className="contact-wrap">
            <div className="contact-info">
              <p>I'm actively looking for internship and research opportunities in AI, data science, and full-stack development. Whether you have a role in mind or just want to chat about tech — I'd love to hear from you!</p>
              <div className="contact-links">
                <a href="mailto:mongkonkrit2580@gmail.com" className="contact-link">
                  <div className="contact-link-icon">✉️</div>
                  mongkonkrit2580@gmail.com
                </a>
                <a href="tel:0412953829" className="contact-link">
                  <div className="contact-link-icon">📞</div>
                  041 295 3829
                </a>
                <a href="https://github.com/chunlimza555" className="contact-link">
                  <div className="contact-link-icon">💻</div>
                  github.com/chunlimza555
                </a>
                <a href="#" className="contact-link">
                  <div className="contact-link-icon">💼</div>
                  LinkedIn Profile
                </a>
                <div className="contact-link" style={{ cursor: 'default' }}>
                  <div className="contact-link-icon">📍</div>
                  Adelaide CBD, Adelaide SA 5000
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-group">
                <label>Your name</label>
                <input type="text" placeholder="Jane Smith" />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="jane@company.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about the opportunity or just say hi!"></textarea>
              </div>
              <button className="form-submit">Send message</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Designed & built with ♥ by <span>Chun Lim (Mongkonkrit)</span> · Adelaide, SA · 2026</p>
      </footer>
    </>
  );
}

export default App;