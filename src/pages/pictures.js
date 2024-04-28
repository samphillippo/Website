import * as React from 'react'
import Navbar from '../components/navbar'
import Seo from '../components/seo'

const PicturesPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Pictures</h1>
      <p>In the future, I plan to fill this page to the brim with my favorite pictures I've taken and found over the years.</p>
    </div>
  )
}

export const Head = () => <Seo title="Pictures" />

export default PicturesPage
