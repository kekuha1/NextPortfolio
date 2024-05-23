"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <body>
        <header>
          <a href="#" className="logo-holder">
            <div className="logo">BL</div>
            <div className="logo-text">Brian Leithead</div>
          </a>
          <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="mailto:kekuha1@gmail.com" className="button">
                  Contact Me
                </a>
              </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </a>
          </nav>
        </header>
        <main>
          <section className="hero container">
            <div className="hero-blue">
              <div>
                <h1>
                  <small>Hi, I'm </small>Brian Leithead!
                </h1>
                <p>
                  I am a versatile tech pro, adept at both ends of the spectrum:
                  crafting seamless user experiences as a Full Stack Web
                  Developer while offering strategic tech guidance as an IT
                  Consultant.
                </p>
                <div className="call-to-action">
                  <a
                    href="./Brian_Leithead_Resume.pdf"
                    className="button black"
                  >
                    View Resume
                  </a>
                  <a href="mailto:kekuha1@gmail.com" className="button white">
                    Contact Me
                  </a>
                </div>
                <div className="social-links">
                  <a href="https://github.com/kekuha1">
                    <img src="./imgs/github.png" alt="Github" />
                  </a>
                  <a href="https://linkedin.com/in/kekuha1">
                    <img src="./imgs/linkedin.png" alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-yellow">
              <img
                src="./imgs/hero-image.png"
                alt="Brian Leithead"
                width="100%"
              />
            </div>
          </section>
          <section className="logos container">
            <div className="marquee">
              <div className="track">
                <img src="./imgs/html.png" alt="HTML" width="128" />
                <img src="./imgs/css.png" alt="CSS" width="128" />
                <img src="./imgs/javascript.png" alt="JS" width="128" />
                <img src="./imgs/sass.png" alt="Sass" width="128" />
                <img src="./imgs/react.png" alt="React" width="128" />
                <img src="./imgs/nextjs.png" alt="Next JS" width="128" />
                <img src="./imgs/azure.png" alt="Azure" width="128" />
                <img src="./imgs/vscode.png" alt="VS Code" width="128" />
                <img src="./imgs/python.png" alt="Python" width="128" />
              </div>
            </div>
          </section>
          <section id="skills" className="skills container">
            <h2>
              <small>About Me</small>Skills
            </h2>
            <div className="holder-blue">
              <div className="left-column">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>NextJs</li>
                </ul>
                <h3>Backend</h3>
                <ul>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>Python</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="right-column">
                <h3>A bit about Me</h3>
                <p>I'm Brian</p>
              </div>
            </div>
          </section>
          <section className="work-experience container">
            <h2>
              <small>Recent</small>
              Work Experience
            </h2>
            <div className="jobs">
              <article>
                <figure>
                  <div>
                    <img
                      src="./imgs/workplace-3.jpg"
                      alt="Tutor"
                      width="100%"
                    />
                    <figcaption>JavaScript Tutor</figcaption>
                  </div>
                </figure>
                <h3>Wyzant</h3>
                <div>May 2024-Present</div>
                <p>
                  Tutor College and Adult Students how to code in Web
                  Development tools such as JavaScript and Python.
                </p>
              </article>
              <article>
                <figure>
                  <div>
                    <img
                      src="./imgs/workplace-1.jpg"
                      alt="IT Consulting"
                      width="100%"
                    />
                    <figcaption>IT Consultant</figcaption>
                  </div>
                </figure>
                <h3>Traction Consulting Group</h3>
                <div>2023-2024</div>
                <p>
                  Developed 8 Microsoft PowerApps projects using PowerApps
                  Builder, Dataverse, Power Automate, Custom JavaScript, and SQL
                  Server.
                </p>
              </article>
              <article>
                <figure>
                  <div>
                    <img
                      src="./imgs/workplace-2.jpg"
                      alt="Front End Web Developer"
                      width="100%"
                    />
                    <figcaption>Web Developer and Data Specialist</figcaption>
                  </div>
                </figure>
                <h3>Cops Plus</h3>
                <div>2022-2023</div>
                <p>
                  Cleaned large data inventory sets using Excel and Power Query
                  while maintaining Front End Code for Ecommerce Site.
                </p>
              </article>
            </div>
          </section>
          <section id="projects" className="bento container">
            <h2>
              <small>Previous</small>
              Completed Projects
            </h2>
            <div className="bento-grid">
              <a
                href="https://flixx-gc3pk1g1l-kekuha1.vercel.app/"
                className="bento-item"
              >
                <img src="./imgs/bento-1.png" alt="Flixx" width="100%" />
              </a>
              <a
                className="bento-item"
                href="https://flixx-gc3pk1g1l-kekuha1.vercel.app/"
              >
                <img src="./imgs/bento-1.png" alt="Flixx" width="100%" />
              </a>
              <a className="bento-item">3</a>
              <a className="bento-item">4</a>
              <a className="bento-item">5</a>
              <a className="bento-item">6</a>
            </div>
          </section>
          <section className="chatbot container">
            <h2>
              <small> Talk to Me </small>
              Chatbot
            </h2>
            <div className="chatbot-blue">
              <div className="chat-info">
                <h3>AI Chatbot</h3>
                <p>
                  Please use this chatbot to ask about my experience and skills.
                  It will help give you a better understanding of me!
                </p>
                <p>You can also download my most recent resume here!</p>
                <a href="./Brian_Leithead_Resume.pdf" className="button black">
                  Download Resume
                </a>
              </div>
              <div className="chat-box">
                <div className="scroll-area">
                  <ul id="chat-log">
                    <li>
                      <span className="avatar bot">AI</span>
                      <div className="message">
                        Hi, I am a interactive chatbot for this site and resume.
                        How can I help?
                      </div>
                    </li>
                    <li>
                      <span className="avatar user">User</span>
                      <div className="message">I have a question for you!</div>
                    </li>
                  </ul>
                </div>
                <div className="chat-message">
                  <input
                    type="text"
                    placeholder="Hey Brian, What skills are you best at?"
                  />
                  <button className="button black">Send</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
