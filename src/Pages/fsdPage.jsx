import React, { useState } from "react";
import WorkSpace from "../Components/WorkSpace";
import Cards from "../Components/Cards";

export default function FsdPage(){

    const bannerImg="data:image/png;base64,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";

    const data=[{
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
      description:"When you're hiring a full-stack developer what are the most important things you look for?"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title:"Top Differences: Full Stack Developer vs Software Engineer 2023",
      description:"A Full Stack Developer is a tech all-rounder. They work on both the front and"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title:"Horizontal vs Vertical Scaling for Efficient System Design",
      description:"In the world of system design, envision a digigtal skysraper - a multifaceted structure built"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title:"Best Book to Learn Full-Stack Development",
      description:"Are you interested in becoming a full-stack developer but not sure where to start?In"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title:"Top 10 Product-Based Companies for Full-Stack Developers[2023]",
      description:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world,"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title:"7 Best Full-Stack Development Online Courses[2023]",
      description:"Today's world is rapidly evolving into a technological landscape, Owing to these dynamics, the demand"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title:"The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
      description:"‍As a full-stack developer, having the right set of tools is crucial for your success."
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
      title:"Best Ways to Learn Full Stack Development in 2023",
      description:"Full stack development is and will be a promising and in-demand career in the upcoming"
     }
  ]
  const [storage,setStorage]=useState(data);

    return(
      <WorkSpace bannerImg={bannerImg}>
         <div className="cardSection">
            {
              storage?.map((value,index)=>(
                <Cards
                key={index}
                img={value.img}
                title={value.title}
                description={value.description}
                />
              ))
            }
        </div>
      </WorkSpace>
    )
}