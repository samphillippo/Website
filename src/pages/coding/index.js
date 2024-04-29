import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'
import { projectsContainer, project, technologies } from './coding.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const CodingPage = () => {
  return (
    <Layout>
      <h1>Coding Projects</h1>
      <div class={projectsContainer}>
        <div class={project}>
          <h2>WORK IN PROGRESS</h2>
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
    </Layout>
  )
}

//TODO: use the blog structure to programmatically generate the projects
//BUT: each one may look different... so maybe not?

export const Head = () => <Seo title="Coding Projects" />

export default CodingPage
