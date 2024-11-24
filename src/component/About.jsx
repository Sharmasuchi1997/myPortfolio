

import { Link } from "react-router-dom"
import Skill from "./Skill"
import Projects from "./Projects"
import Contact from "./Contact"

export default function About() {
    // const navigate=useNavigate()

    const redirectGithubPage = () => {
        console.log("good to go")
        window.open('https://github.com/masai-course/suchitra_sharma_cap05_189', '_blank')
        console.log("done")
    }

    return (
        <>

            <div style={{
                width: "100%",
                // border: "1px solid red",
                height: "500px",
                display: "flex",
                justifyContent: "space-between"
            }}>

                <div style={{
                    // border: "1px solid green",
                    width: "60%",
                    textAlign: "center"

                }}>
                    <h1 style={{ color: "white", fontSize: "50px" }}
                    >Hey There!</h1>
                    <h2 style={{ color: "white", textAlign: "center", fontSize: "40px" }}>My name is Suchitra Sharma</h2>
                    <h3 style={{
                        fontSize: "26px",
                        fontWeight: "lighter",
                        color: "white",
                        marginLeft: "30px"

                    }}


                    >I am a Frontend React Developer , "I  create dynamic and responsive web applications using modern technologies
                        like React, HTML, CSS, and JavaScript, focusing on delivering exceptional user experiences".</h3>

                    {/* //left content */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around"
                    }}>
                        {/* // github page */}
                        <button style={{
                            fontSize: "30px",
                            marginBlockStart: "50px",
                            borderRadius: "10px"
                        }} onClick={redirectGithubPage}>Github <img style={{ width: "20px" }} src="data:image/jpeg;base64,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" /></button>

                        {/* //resume page */}
                        <button style={{
                            fontSize: "32px",
                            marginBlockStart: "50px",
                            borderRadius: "10px"
                        }}

                        >    <a
                            href="public/SuchitraSharma-FrontendDeveloper(React)-XwZZ (1) (1).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="public/SuchitraSharma-FrontendDeveloper(React)-XwZZ (1) (1).pdf"
                            style={{ textDecoration: "none", color: "inherit" }}
                        > Resume  <img style={{ width: "20px" }} src="https://cdn-icons-png.flaticon.com/128/7268/7268609.png" />

                            </a>
                        </button>

                    </div>

                </div>

                {/* // right content */}
                <div style={{
                    // border: "1px solid green",
                    width: "40%"
                }}>
                    <img
                        style={{
                            borderRadius: "100%",
                            borderColor: "red",
                            width: "400px",
                            marginLeft: "30px",
                            marginBlockStart: "30px",                                                                     /* Soft outer shadow */  /* Inner glow effect */
                            border: "3px solid transparent", /* Transparent border to focus on the shadow */
                            borderBlockStyle: "double",
                            background: " #1a1a1a", /* Dark background for contrast */
                            boxShadow: "20px 20px 20px rgba(255, 0, 0, 0.8),", /* Initial glowing shadow */
                            animation: "lightning 1.5s infinite ease-in-out", /* Lightning effect */


                        }}
                        src="my edit pic for portfolio.jpg" alt="myPic" />

                </div>
                
        </div>
        {/* <Skill/>
        <Projects/>
        <Contact/> */}
        <hr />
        </>
    )
}