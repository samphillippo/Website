import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PersonalPage = () => {
  return (
    <Layout>
      <h1>Side Ventures</h1>
      <p>Completed and in development.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Side Ventures" />

export default PersonalPage
