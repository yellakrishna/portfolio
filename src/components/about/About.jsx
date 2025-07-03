import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className='mt-4 vh-50 about'>
    <h1 style={{textAlign:"center",background:"lightGray", padding:10,fontFamily:"roboto",fontWeight:"bold",fontVariant:"small-caps"}}>About us</h1>
   
    <div className='about-container   '>
      
      <div className='imgContainer'>
        <img src='yella 1.png' alt='aboutImg' className='aboutImg'/>
      </div>
      <div className='aboutHeading'>
      <p>
     Hi, I'm <span>Yella Krishna</span>, a passionate and self-driven Full Stack Developer with strong skills in MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS). I specialize in building responsive, user-friendly web applications and have hands-on experience in real-world project development.

Despite having a career gap, I’ve spent my time consistently improving my skills through personal projects, freelancing, and deep learning in technologies like ReactJS, Next.js, Tailwind CSS, Material UI, and API integration. I believe in learning by doing — most of my learning comes from building projects and solving real-world problems.

My goal is to become a successful software developer, contribute to meaningful projects, and grow in a challenging environment. I’m also exploring AI integrations in web apps to stay ahead in the evolving tech landscape.
      </p>

      </div>
      </div>
    </div>
    </>
  )
}

export default About
