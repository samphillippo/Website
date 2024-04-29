import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  titleLogoContainer,
  logo,
  logoContainer,
} from './navbar.module.css'

const Navbar = () => {
  return (
    <header className={container}>
      <div className={titleLogoContainer}>
        <h1 className={siteTitle}>sam phillippo</h1>
        <div className={logoContainer}>
          <a href="https://github.com/samphillippo">
            <StaticImage src="../../images/github_logo.png" alt="Github" className={logo} />
          </a>
          <a href="https://www.linkedin.com/in/sam-phillippo/">
            <StaticImage src="../../images/linkedin_logo.png" alt="LinkedIn" className={logo} />
          </a>
          <a href="mailto:samphillippo1@gmail.com">
            <StaticImage src="../../images/email_logo.png" alt="Email" className={logo} />
          </a>
        </div>
      </div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/coding" className={navLinkText}>
              Coding Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/personal" className={navLinkText}>
              Personal Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/pictures" className={navLinkText}>
              Pictures
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
