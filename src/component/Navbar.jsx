import { button } from "framer-motion/client"
import { Link } from "react-router-dom"
import { useState } from "react"
// import {HStack, Container} from '@chakra-ui/react'

const listOfLink=[
    // {
    //     'to':'/home',
    //     'label':'Home'
    // },
    {
        'to':'/about',
        'label':'About'
    },

    {
        'to':'/skill',
        'label':'Skill'
    },
    {
        'to':'/projects',
        'label':'Projects'
    },
    {
        'to':'/contact',
        'label':'Contact'
    }
]


export default function Navbar({onNavigate}){

    const[activeLink, setActiveLink]= useState("about")

    const handleClick=(section)=>{
        setActiveLink(section)
        onNavigate(section)
    }

    return(
        <>
        <div style={{display:"flex",
        justifyContent:"space-around",
            // border:"1px solid black",
            fontSize:"30px",
            height:"50px",
          paddingBlockStart:"10px",
          backgroundColor:"lightgoldenrodyellow",
         padding:"17px"
          
            
        }}> 
        {
            listOfLink.map((link)=>(
                // <Link key={link.to} to={link.to}>
                 
                //    {link.label}
                // </Link>
                <button key={link.to} 
                    onClick={()=>handleClick(link.to)}
                    style={{
                        border:"none",
                        background: activeLink===link.to ? "darkgrey": "transparent",
                        color: activeLink===link.to ? "#fff" :"#000",
                        fontSize:"30px",
                        color:"darkgoldenrod",
                        fontWeight:"bold",
                        textDecoration:'underline'

                    }}
                
                >
                    {link.label}
             </button>
            ))
        }

        </div>
     
     
        </>
        

    )
}