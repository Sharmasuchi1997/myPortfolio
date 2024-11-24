// import { Routes, Route } from "react-router-dom"
import React,{useRef} from 'react'
// import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Skill from './Skill'



export default function AllRoutes({onNavigate}){
    // const homeRef=useRef(null)
    const aboutRef=useRef(null)
    const contactRef=useRef(null)
    const projectRef=useRef(null)
    const skillRef=useRef(null)

    //pass the section references to the parent

    const handleScrollToSection= (section)=>{
        const refs={
            // home: homeRef,
            about: aboutRef,
            skill: skillRef,
            projects: projectRef,
            contact: contactRef
           
            
        }

    //     refs[section]?.current.scrollIntoView({
    //        behavior:"smooth",
    //        block:"start"
    //  })
        
    if (refs[section]?.current) {
        refs[section].current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.error("Section not found:", section);
      }
    }
    // console.log("Scrolling to:", section);

    //optionally, pass handleScrollToSection to the parent(if needed)

    if (onNavigate) {
        onNavigate(handleScrollToSection);
      }



    return(
        <div style={{overflow:"scroll", border:"1px solid yellow", display:"grid", }}>
       
       {/* //  style={{height:"100vh", padding:"5px" }} */}
        <div ref={aboutRef}> <About/> </div>                                                                                  
        <div ref={skillRef}  style={{height:"auto", padding:"5px" }} > <Skill/> </div>
        <div ref={projectRef}  style={{height:"auto", padding:"5px" }} >  <Projects/> </div>
        <div ref={contactRef}  style={{height:"auto", padding:"5px" }}  > <Contact/> </div>
        
        
        


         </div> 
    )
}