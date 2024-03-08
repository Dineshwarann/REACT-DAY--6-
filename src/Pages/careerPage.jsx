import React, { useState } from "react";
import WorkSpace from "../Components/WorkSpace";
import Cards from "../Components/Cards";

export default function CareerPage(){
   const bannerImg="data:image/jpeg;base64,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";

   
   const data=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Steps-In-The-UX-Design-Process.webp",
    title:"12 Unique UI/UX Project Ideas to Boost Your Portfolio",
    description:"As a UX designer, building a strong portfolio is crucial to landing your dream job"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-What-Does-a-UIUX-Designer-Do-Career-Guide.webp",
    title:"What Does a UI/UX Designer Do?",
    description:"In the vast digital landscape we navigate daily, the seamless and intuitive experiences we encounter"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Steps-In-The-UX-Design-Process.webp",
    title:"8 Steps in the UX Design Process You Should Know",
    description:"The success of a product or a service not only depends on its features but"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-What-Does-a-UIUX-Designer-Do-Career-Guide.webp",
    title:"What is UI/UX? Top Things to Know in 2023",
    description:"In the current technology-driven world, the terms UI(User Interface) and UX(User Experience) have"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Data-Engineering-Projects-How-to-Build-Real-time-Streaming-Data-Pipelines.webp",
    title:"The Easiest Programming Languages to Learn in 2023",
    description:"Are you considering a career in coding? Great choice! Learning to code is valuable"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp",
    title:"Top 5 IT Jobs for Economics Students",
    description:"In today's digital age, the intersection of economics and technology offers exciting career opportunities for"
   },
   {
     img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Steps-In-The-UX-Design-Process.webp",
     title:"6 Best AI Tools for Coding",
     description:"Are you into coding and want to make your life easier? Then you're in the"
    },
    {
     img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Data-Engineering-Projects-How-to-Build-Real-time-Streaming-Data-Pipelines.webp",
     title:"Software Testing vs. Quality Assurance (QA)",
     description:"When it comes to making computer programs and apps, two important things are making sure"
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