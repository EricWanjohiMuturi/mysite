//import React from 'react'

import { CTAbuttonfilled, CTAbuttonoutlined } from "./Buttons"

export const HomeHero = () => {
  return (
    <>
    <div className="flex flex-wrap items-center justify-between gap-4 my-10">
        <div className="my-5">
            <h2 className="font-regular text-left text-2xl my-2">
                Hello 👋, I'm Eric.
            </h2>
            <h2 className="font-bold text-5xl my-2">
                Design Develop Automate.
            </h2>
            <p>

            </p>
            <div className="flex items-center flex-wrap gap-3">
                <CTAbuttonfilled label="Learn More"/>
                <CTAbuttonoutlined label="View Projects"/>
            </div>  
        </div>
        <div className="flex">
            <img src=" "alt="" loading="lazy" />
        </div>
    </div>
    </>
  )
}
