import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PicturesPage = () => {
  return (
    <Layout>
      <h1>Pictures</h1>
      <p>In the future, I plan to fill this page to the brim with my favorite pictures I've taken and found over the years.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Pictures" />

export default PicturesPage
