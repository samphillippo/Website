import * as React from 'react'
import Navbar from '../../components/navbar'
import Seo from '../../components/seo'
import { Link } from 'gatsby'
import { projectsContainer, project, technologies } from './coding.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const CodingPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Coding Projects</h1>
      <div class={projectsContainer}>
        <div class={project}>
          <Link to="/">
            <StaticImage src="../../../images/coding_projects.png" alt="Project 1" />
            <h2>Cube World</h2>
            <ul class={technologies}>
              <li>C++</li>
              <li>OpenGL</li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  )
}

//TODO: use the blog structure to programmatically generate the projects

export const Head = () => <Seo title="Coding Projects" />

export default CodingPage
