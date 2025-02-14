//import React from 'react'

import { HeadingOne } from "../UI/Headings"
import { HomeHero } from "../UI/Hero"
import { ProjectCard } from "../UI/ProjectCard"

const Home = () => {
  return (
    <>
      <HomeHero />
      <div>
        <HeadingOne title="Projects" />
      </div>
      <ProjectCard />
    </>
  )
}

export default Home