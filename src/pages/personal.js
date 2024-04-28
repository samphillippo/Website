import * as React from 'react'
import Navbar from '../components/navbar'
import Seo from '../components/seo'

const PersonalPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Side Ventures</h1>
      <p>Completed and in development.</p>
    </div>
  )
}

export const Head = () => <Seo title="Side Ventures" />

export default PersonalPage
