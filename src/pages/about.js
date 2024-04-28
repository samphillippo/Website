import * as React from 'react'
import { aboutMeContainer, profileSection, linksSection, experienceSection, missionStatement } from './about.module.css'
import Navbar from '../components/navbar'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className={aboutMeContainer}>
        <div className={profileSection}>
          <h1>About Me</h1>
          <StaticImage src="../../images/samphil.png" alt="Profile Picture" />
          <p className={missionStatement}>
            Mission Statement here
          </p>
        </div>
        <div className={linksSection}>
          <h2>Links</h2>
          <ul>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            <li><a href="https://github.com">GitHub</a></li>
            <li><a href="/resume.pdf">Resume</a></li>
          </ul>
        </div>
        <div className={experienceSection}>
          <h2>Work Experience</h2>
          <p>Work experience here.</p>
        </div>
        <div>
          <h2>Favorite Things</h2>
          <p>Favorite things here.</p>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="About" />

export default AboutPage
