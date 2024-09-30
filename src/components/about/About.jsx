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
      A Web Developer from Delhi. I build dynamic,
            <br /> intuitive websites with a focus on creativity.
            <br /> Explore my projects to see my work!
      </p>

      </div>
      </div>
    </div>
    </>
  )
}

export default About
