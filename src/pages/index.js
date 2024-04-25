import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

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

export const Head = () => <title>Home Page</title>

export default IndexPage
