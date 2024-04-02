import React from 'react';
import './index.css'; 
import './App.css'; 


function App() {
  return (
    <>
      <nav>
        <div className="left">
          <img src="public/image/logo.png" alt="logo" />
        </div>
        <div className="right">
          <ul>
            <li><a href="#home">About me</a></li>
            <li><a href="#frontSkills">Front-end skills</a></li>
            <li><a href="#backskills">Back-end skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="hamburger">
          <span id="#menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </span>
        </div>
      </nav>
      <section className="hero" id="home">
        <div className="avatar">
          <img src="public/image/img1.png" alt="avatar" />
        </div>
        <div className="description">
          <h3 className="job_title">Full stack developer</h3>
          <h1>Dhouha Abbassi</h1>
          <p>
            Je m'appelle Dhouha Abbassi, une passionnée de développement informatique. En tant que développeuse, j'apporte une approche créative et méthodique à la résolution de problèmes. Ma fascination pour la programmation m'a guidée à travers divers langages tels que Python, Java et JavaScript. Mon expérience pratique dans la création d'applications web et mobiles atteste de ma polyvalence. Toujours avide d'apprendre et de m'améliorer, je suis déterminée à contribuer au monde du développement logiciel en proposant des solutions novatrices et efficaces. Merci pour cette opportunité de me présenter.
          </p>
          <div className="hero-buttons">
            <button><a href="#portfolio">Portfolio</a></button>
            <button><a href="#contact">Contact</a></button>
          </div>
        </div>
      </section>
      <section id="frontSkills" className="skills">
        <div className="skills-title">
          <h2>Frontend Skills</h2>
        </div>
        <div className="skills-container">
          <div className="skills-field">
            <h2>Technologies</h2>
            <div className="skill">
              <img src="public/image/img2.png" alt="pen" />
              <div className="skill-details">
                <h3>UI/UX Design</h3>
                <p>
                  Il est généralement reconnu que lors de l'examen d'une conception graphique, une personne peut être distraite par le texte environnant si celui-ci a un sens. La tâche du Lorem Ipsum est alors de remplacer ce texte significatif par une alternative dénuée de sens appropriée.
                </p>
              </div>
            </div>
            <div className="skill">
              <img src="public/image/img3.png" alt="pen" />
              <div className="skill-details">
                <h3>Html/Css javascript</h3>
                <p>
                  C'est généralement connu qu'en examinant une conception graphique, une personne peut être distraite par le texte environnant si celui-ci a un sens. La tâche du Lorem Ipsum est alors de remplacer ce texte significatif par une alternative dénuée de sens appropriée.
                </p>
              </div>
            </div>
            <div className="skill">
              <img src="public/image/img4.png" alt="pen" />
              <div className="skill-details">
                <h3>react</h3>
                <p>
                  C'est généralement connu que, lors de l'examen d'une conception graphique, une personne peut être distraite par le texte environnant si celui-ci a du sens. La mission du Lorem Ipsum est alors de remplacer ce texte significatif par une alternative dénuée de sens appropriée.
                </p>
              </div>
            </div>
          </div>
          <div className="skills-level">
            <h2>Coding skills</h2>
            <div className="skill-level">
              <div className="desc">
                <h3>HTML</h3>
                <span>100%</span>
              </div>
              <div className="progress-bar" style={{ '--progress': '100%' }}></div>
            </div>
            <div className="skill-level">
              <div className="desc">
                <h3>Javascrpit</h3>
                <span>80%</span>
              </div>
              <div className="progress-bar" style={{ '--progress': '80%' }}></div>
            </div>
            <div className="skill-level">
              <div className="desc">
                <h3>React</h3>
                <span>40%</span>
              </div>
              <div className="progress-bar" style={{ '--progress': '40%' }}></div>
            </div>
            <div className="skill-level">
              <div className="desc">
                <h3>css</h3>
                <span>50%</span>
              </div>
              <div className="progress-bar" style={{ '--progress': '50%' }}></div>
            </div>
          </div>
        </div>
      </section>
     
<section id="backskills" className="skills">
  <div className="skills-title">
    <h2>Back-end Skills</h2>
  </div>
  <div className="skills-container">
    <div className="skills-field">
      <h2>Technologies</h2>
      <div className="skill">
        <img src="./image/img2.png" alt="pen" />
        <div className="skill-details">
          <h3>PHP</h3>
          <p>
            C'est généralement connu que, lors de l'examen d'une conception graphique, une personne peut être distraite par le texte environnant, surtout s'il a un sens. La tâche du Lorem Ipsum est alors de remplacer ce texte significatif par une alternative dénuée de sens appropriée.
          </p>
        </div>
      </div>
      <div className="skill">
        <img src="public/image/img3.png" alt="pen" />
        <div className="skill-details">
          <h3>Database</h3>
          <p>
            C'est généralement connu que, lors de l'examen d'une conception graphique, une personne peut être distraite par le texte environnant, surtout s'il a un sens. La mission du Lorem Ipsum est alors de remplacer ce texte significatif par une alternative dénuée de sens appropriée.
          </p>
        </div>
      </div>
    </div>
    <div className="skills-level">
      <h2>Coding skills</h2>
      <div className="skill-level">
        <div className="desc">
          <h3>PHP </h3>
          <span>60%</span>
        </div>
        <div className="progress-bar" style={{ '--progress': '60%' }}></div>
      </div>
      <div className="skill-level">
        <div className="desc">
          <h3>MysQl</h3>
          <span>40% </span>
        </div>
        <div className="progress-bar" style={{ '--progress': '40%' }}></div>
      </div>
    </div>
  </div>
</section>

<section id="portfolio" className="skills">
  <div className="skills-title">
    <h2>Portfolio</h2>
  </div>
  <div className="skills-container">
    <div className="skills-field">
      <h2>clients</h2>
      <div className="right">
        <ul>
          <li>DevRos</li>
          <li>Pâtisserie </li>
          <li>Boulangerie</li>
          <li>societe</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="skills-container">
    <div className="skills-field">
      <h2>Galerie</h2>
      <div className="text">
        <ul>
          <li><a href="#dhouha">DevRos</a></li>
          <li><a href="#ahlem">Pâtisserie </a></li>
          <li><a href="#eya">Boulangerie </a></li>
          <li><a href="#coka">societe</a></li>
        </ul>
      </div>
    </div>
    <div className="imge">
      <img src="public/image/img5.png" alt="bloo" />
    </div>
  </div>
</section>

<section id="contact" className="skills">
  <div className="skills-title">
    <h2>Contact</h2>
  </div>
  <div className="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25983.85365807159!2d11.031457385306023!3d35.50473054922499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130223f5186c6cf9%3A0x675f7b734dffa5bb!2sMahdia!5e0!3m2!1sfr!2stn!4v1709371767772!5m2!1sfr!2stn" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className="skills-container">
    <div className="skills-field">
      <div className="skill">
        <img src="public/image/img6.png" alt="pen" />
        <div className="skill-details">
          <h3>26251959</h3>
          <p>
            Contactez-moi à ce numéro.
          </p>
        </div>
      </div>
      <div className="skill">
        <img src="public/image/img7.png" alt="pen" />
        <div className="skill-details">
          <h3>Djerba-midoun</h3>
          <p>
            "Djerba Midoun" fait référence à une zone située sur l'île de Djerba en Tunisie.
          </p>
        </div>
      </div>
      <div className="skill">
        <img src="public/image/img8.png" alt="pen" />
        <div className="skill-details">
          <h3>douhaabassi96@gmail.com</h3>
          <p>
            Vous pouvez me contacter à cet email.
          </p>
        </div>
      </div>
    </div>
    <div className="skills-field">
      <h2>Contacte-moi</h2>
      <div className="formulaire">
        <form>
          <label htmlFor="nom"></label>
          <input type="text" id="nom" name="nom" placeholder="nom" required /><br /><br />
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Email" required /><br /><br />
          <select id="sujet" name="sujet" placeholder="option">
            <option value="general">Général</option>
            <option value="support">Support</option>
            <option value="vente">Vente</option>
          </select><br /><br />
          <label htmlFor="message"></label><br />
          <textarea id="message" name="message" placeholder="message" rows="4" cols="50" required></textarea><br /><br />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</section>


      <footer>
        <div className="footer-left">
          <ul>
            <li><a href="#fb">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#youtube">Youtube</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
