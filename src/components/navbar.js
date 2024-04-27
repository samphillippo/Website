import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
  } from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={container}>
        <header className={siteTitle}>Sam Phillippo</header>
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
    </div>
  )
}

export default Navbar
