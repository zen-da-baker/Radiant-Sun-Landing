import { Header } from "./page-components/Header";
import { Carolsel } from "./page-components/Carolsel";
import { AboutGame } from "./page-components/AboutGame";
import { GameInstructions } from "./page-components/GameInstructions";

import "../../styles/main.css";

export default function Home() {
  return (
  <body>
    
    <Header />
    

    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="text-center" style={{ fontSize: "5rem" }}>Radiant Sun</h1>
            </div>
        </div>
    </div>

    <Carolsel />

    <AboutGame />

    <GameInstructions />

    <div className="container">
        <div className="row">
            <div className="col">
                <hr />
            </div>
        </div>
    </div>

    <div className="container flex">

        <h1>Created in association with</h1>

        <div id="gallery-1" className="row g-3">
            <div className="col">
                <div className="card border-dark" style={{ bottom: "0px", right: "10px" }}>
                    <div className="card-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <img src="images/Gamespawn Logo.svg" style={{ width: "80px" }} className="d-inline" />
                                </div>
                                <div className="col">
                                    <h3 className="d-inline">Gamespawn</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <p>
                            Game development club at the University of California, Riverside.
                        </p>

                        <a href="https://gamespawn.github.io/index.html" type="button" className="btn btn-outline-dark" target="_blank">
                            Organiztion Website
                        </a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark" style={{ bottom: "0px", right: "10px" }}>
                    <div className="card-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <img src="images/UC_Riverside_seal.svg" style={{ width: "80px" }} className="d-inline" />
                                </div>

                                <div className="col">
                                    <h3 className="d-inline">University of California, <br /> Riverside</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark" style={{ bottom: "0px", right: "10px" }}>
                    <div className="card-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/images/California_State_University,_Fullerton_seal.svg" style={{ width: "80px" }} className="d-inline" />
                                </div>

                                <div className="col">
                                    <h3 className="d-inline">California State University, <br /> Fullerton.</h3>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
        </div>


    <div className="container">
        <h1>Our Team</h1>

        <div id="gallery-2" className="row row-cols-2 g-3">
            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Angel</h3>
                        </div>

                        <p className="card-text">Producer, Writer, & Director</p>
                        <p className="card-text">
                            Angel is the producer of the Radiant Sun video game project, beginning in 2021. 
                            Currently, he is writing film scripts at a professional level.
                        </p>
                        <a href="https://angelmayorga.weebly.com/" target="_blank" className="card-link btn btn-outline-dark">Portfolio</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Donovan</h3>
                        </div>

                        <p className="card-text">Writer, Editor, & Web Developer</p>
                        <p className="card-text">
                            Don joined the team back in 2021 as a developmental editor for the script but also brought his experience in web development to 
                            design the website you see today :) !
                        </p>
                        <a href="https://donovanfrazier.com" target="_blank" className="card-link btn btn-outline-dark">Portfolio</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Jesse</h3>
                        </div>

                        <p className="card-text">Musician</p>
                        <p className="card-text">Hi! Just a guy who wanted to add a little bit of value to a passion project.</p>
                        <a href="mailto:jcazu001@ucr.edu" target="_blank" className="card-link btn btn-outline-dark">Email</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Starri</h3>
                        </div>

                        <p className="card-text">Artist</p>
                        <p className="card-text">I'm Starri! I like drawing and designing characters and I also play way too many gacha games!</p>
                        <a href="https://twitter.com/4kstarri" target="_blank" className="card-link btn btn-outline-dark"><i className="fa fa-twitter"></i> @4kstarri</a>
                    </div>
                </div>
            </div>
        
            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Edwin</h3>
                        </div>

                        <p className="card-text">Programmer</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Aramis</h3>
                        </div>

                        <p className="card-text">Programmer</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Daphne F.</h3>
                        </div>

                        <p className="card-text">Programmmer</p>
                        <p className="card-text">
                            Daphne enjoys music, gaming, and her cats. When she’s not working in the entertainment industry or doing voice over and singing work, 
                            she enjoys archery, karaoke, podcasting, and window shopping for cat trees. 
                        </p>
                        <p className="card-text">
                            Thank you to Angel and Team for being kind, patient, and loving the craft of storytelling and video game development. It was a pleasure. 
                        </p>
                        <a href="https://www.deefayy.com" target="_blank" className="card-link btn btn-outline-dark">Portfolio</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Peter</h3>
                        </div>

                        <p className="card-text">Programmer</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>John Henry Ronk</h3>
                        </div>

                        <p className="card-text">Play Tester</p>
                        <p className="card-text">
                            John Henry Ronk, graduated className of 2022 at University of California Riverside with a bachelor's degree in creative writing. 
                            Has an interest in fiction, particularly speculative fiction, as well as culture, language, programming, and art.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-dark">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Braxton</h3>
                        </div>

                        <p className="card-text">Beta Tester</p>
                    </div>
                    
                </div>
            </div>
            
        </div>

    </div>

    <a href="#" className="btn btn-secondary" id="back-to-top">Back to Top</a>
    
        
        
    <footer className="py-3 my-4 bg-dark text-white" >
        <div id="footer-container" className="container">
            <p className="text-center">
                &copy; 2023 Radiant Sun Devs
            </p>
        </div>
    </footer>
        


    
  </body>
  )
}
