import * as React from 'react'
import Navbar from '../components/navbar'
import Seo from '../components/seo'

const PicturesPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Pictures</h1>
      <p>Pictures I like.</p>
    </div>
  )
}

export const Head = () => <Seo title="Pictures" />

export default PicturesPage
