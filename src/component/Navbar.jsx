import { a, button } from "framer-motion/client"
// import { Link } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-scroll";
// import {HStack, Container} from '@chakra-ui/react'

const listOfLink=[
    // {
    //     'to':'/home',
    //     'label':'Home'
    // },
    {
        'to':'about',
        'label':'About'
    },

    {
        'to':'skills',
        'label':'Skills'
    },
    {
        'to':'projects',
        'label':'Projects'
    },
    {
        'to':'contact',
        'label':'Contact'
    }
]


export default function Navbar(){


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
            listOfLink.map((link, ind)=>(
                // <Link key={link.to} to={link.to}>
                 
                //    {link.label}
                // </Link>
               <Link to={link.to} smooth={true} duration={500} key={ind}>
                 <button key={link.to} 
                    onClick={()=>handleClick(link.to)}
                    style={{
                        border:"none",
                        background: link.to ? "darkgrey": "transparent",
                        color: link.to ? "#fff" :"#000",
                        fontSize:"30px",
                        // color:"darkgoldenrod",
                        fontWeight:"bold",
                        textDecoration:'underline'

                    }}
                
                >
                    {link.label}
             </button>
               </Link>
            ))
        }

        </div>
     
     
        </>
        

    )
}