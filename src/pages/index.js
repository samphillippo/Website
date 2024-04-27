import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my personal website. I love Jose.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../../images/jose.jpeg"
      />
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
