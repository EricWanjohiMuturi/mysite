//import React from 'react'

import { FeaturedImageGallery } from "../UI/Gallery"

const Project = () => {
  return (
    <>
     <div className="my-10">
        <h2 className="text-left font-bold text-5xl text-blue-600">Project Title</h2>
        <div className="flex flex-wrap gap-7 my-5">
            <div className="sm:w-7/12">
            <FeaturedImageGallery />
            </div>
            <div className="sm:w-4/12">
                <h3 className="text-left text-2xl text-blue-600 font-bold mb-4">Project Overview</h3>
                <p className="text-lg text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa odit voluptatum nam veritatis, atque eaque, rem libero, mollitia debitis hic perferendis. Beatae laborum ratione voluptatum quasi. Atque officia odit dolores cupiditate vero, reprehenderit sunt modi repudiandae, iure libero voluptatibus voluptates, nam optio nostrum minus error. Error omnis tenetur voluptatibus veniam sint consequatur vitae delectus quae cum saepe impedit hic nisi vero quidem illum, blanditiis quibusdam quas corporis voluptate voluptates, ex ipsum. Nam sapiente obcaecati eaque quas dolor expedita iure similique.</p>
                <div className="my-10">
                    <div className="bg-white p-5 rounded shadow">
                        <h4 className="text-left text-xl text-blue-600 font-bold">Category: Ecommerce</h4>
                        <h4 className="text-left text-xl text-blue-600 font-bold">Service: FrontEnd Development</h4>
                        <h4></h4>
                    </div>

                </div>
            </div>
        </div>
     </div>   

    </>
  )
}

export default Project