import * as React from 'react'
import { profileSection, profilePicture, sectionTitle, emailLink, experienceSection, missionStatement, resumeButton } from './about.module.css'
import Layout from '../components/layout';
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <h2 className={sectionTitle}>Let me introduce myself.</h2>
      <div className={profileSection}>
        <StaticImage src="../../images/samphil.png" alt="Profile Picture" className={profilePicture}/>
        <div className={missionStatement}>
          <p>I am a software engineer actively seeking employment beginning in Summer 2024.
          Graduating with highest honors, I earned a Bachelor of Science in Computer Science from Northeastern University.
          </p>
          <p>My primary interests thus far have been computer vision, machine-learning, and
          Natural Language Processing, but I've been lucky enough to experience nearly all areas of computer science throughout
          my career!
          </p>
          <p>Feel free to explore my website, and if you believe I may be a good fit for your
          organization, or just share some common interests, please don't hesitate to reach out
          at <span><a href="mailto:samphillippo1@gmail.com" className={emailLink}>samphillippo1@gmail.com</a></span>.
          </p>
        </div>
      </div>
      <div className={experienceSection}>
        <h2>Work Experience</h2>
        <p>Work experience here.</p>
      </div>
      <div>
        <h2>Favorite Things</h2>
        <p>Favorite things here.</p>
      </div>
      <a href="/sam_phillippo_resume.pdf" download className={resumeButton}>
        Download Resume
      </a>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />

export default AboutPage
