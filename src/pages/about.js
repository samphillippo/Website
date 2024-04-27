import * as React from 'react'
import Navbar from '../components/navbar'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which is currently in development.</p>
    </div>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
