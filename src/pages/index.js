import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { imageContainer, image, label } from './index.module.css'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
        <div className={imageContainer}>
          <Link to="/about">
            <StaticImage src="../../images/about_me.JPG" alt="My trip to Yosemite National Park" className={image} />
            <span className={label}>About</span>
          </Link>
          <Link to="/coding">
            <StaticImage src="../../images/coding_projects.png" alt="A screenshot from my Cube World game" className={image} />
            <span className={label}>Coding Projects</span>
          </Link>
          <Link to="/personal">
            <StaticImage src="../../images/personal_projects.JPG" alt="My first performance with Weighted Dice" className={image} />
            <span className={label}>Side Ventures</span>
          </Link>
          <Link to="/pictures">
            <StaticImage src="../../images/pictures.jpg" alt="The Northern Lights in Iceland" className={image} />
            <span className={label}>Pictures</span>
          </Link>
        </div>
    </Layout>
  )
}

//TODO: Add JSON-LD
export const Head = () => (
  <Seo>
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </Seo>
)

export default IndexPage
