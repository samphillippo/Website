import * as React from 'react'
import Navbar from '../components/navbar'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <p>This is my personal website.</p>
      <StaticImage
        alt="My trip to Yosemite National Park"
        src="../../images/about_me.JPG"
      />
      <StaticImage
        alt="A screenshot from my Cube World game"
        src="../../images/coding_projects.png"
      />
      <StaticImage
        alt="My first performance with Weighted Dice"
        src="../../images/personal_projects.JPG"
      />
      <StaticImage
        alt="The Northern Lights in Iceland"
        src="../../images/pictures.jpg"
      />
    </div>
  )
}

//TODO: Add JSON-LD
export const Head = () => (
  <Seo>
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </Seo>
)

export default IndexPage
