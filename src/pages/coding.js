import * as React from 'react'
import Navbar from '../components/navbar'
import Seo from '../components/seo'

const CodingPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Coding Projects</h1>
      <p>Completed and in development.</p>
    </div>
  )
}

export const Head = () => <Seo title="Coding Projects" />

export default CodingPage
