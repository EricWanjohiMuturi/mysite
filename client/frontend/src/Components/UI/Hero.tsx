//import React from 'react'

import { CTAbuttonfilled, CTAbuttonoutlined } from "./Buttons"

export const HomeHero = () => {
  return (
    <>
    <div className="flex flex-wrap items-center justify-between gap-4 my-10">
        <div className="sm:w-6/12 my-5 h-auto">
           <h1 className="text-xl mb-3 text-left">Hi 👋, I’m Eric.</h1>
            <h1 className="text-5xl font-bold mb-3 text-left text-blue-600">Design, Develop & Automate</h1>
            <p className="text-left text-xl mb-6">
                I am a Fullstack Developer; 
                with expertise in UI/UX design, Software Development and Branding. I deliver responsive, scalable and user-centric solutions. 
                Let’s transform your ideas into powerful web applications designed for impact and performance.
            </p>
            <div className="flex items-center flex-wrap gap-3">
                <CTAbuttonfilled label="Learn More" theroute="/about/"/>
                <CTAbuttonoutlined label="View Projects" theroute="/projects/"/>
            </div>  
        </div>
        <div className="flex">
             <img src="/Eric/Muturi_Eric_Full-Stack_Developer.png" alt="Eric Wanjohi Muturi - Software Engineer | Designer"  width={480} className=""/>
        </div>
    </div>
    </>
  )
}
