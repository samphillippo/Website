import * as React from 'react'
import { title, text } from './styles.module.css'
import Navbar from '../components/navbar'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className={title}>About Me</h1>
      <p className={text}>I'm currently a Senior at Northeastern University studying Computer Science
      with a Concentration in Artificial Intelligence, set to graduate with highest honors in May 2024.
      I pride myself on being highly adaptable, and highly motivated, and I use these skills to maximize
      my learning in every endeavor.</p>

     <p className={text}> My main areas of interest are computer vision and machine learning, which I've been able to explore
      in depth through both my work and academic experiences. I'm currently working on furthering my knowledge
      of deep-learning practices, and stay up to date with current research into the field.</p>

      <p className={text}>In my personal time, I've been working on a 3D sandbox game in OpenGL to gain further graphical skills,
      and a prompt-based bibliography tool to improve my understanding of Natural Language Processing.
      Outside of software, I am passionate about writing, playing, and listening to music, as well as experiencing
      new cultures through travel and conversation.</p>

      <p className={text}>If you share any of these interests, please don't hesitate to message me!</p>

    </div>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
