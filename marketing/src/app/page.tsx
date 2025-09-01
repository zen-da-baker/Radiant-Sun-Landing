import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <body>
    <div>
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation" style="padding-right:10px;">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse bg-dark" style={{ height: "75px;" }}>
            
                    <div className="container-fluid">
                        <div className="row gy-3">

                            <div className="col-6">
                                <div className="container">
                                    <a className="navbar-brand" href="index.html" style={{ paddingLeft: "20px" }}>
                                        <img src="images/SilverSunValkyrie.png" style={{ width: "40px" }} />
                                    Radiant Sun
                                    </a>
                                </div>
                                
                            </div>

                            <div className="col-6">
                                <div className="container">

                                    <ul className="navbar-nav gy-3">
                                        <li className="nav-item">
                                            <a href="/images/Gamespawn Logo.svg" type="button" className="btn btn-outline-light" target="_blank" download>
                                                <img src="images/Windows_logo_-_1992.svg" style={{ height: "30px" }} /> Download Windows Version</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/images/Gamespawn Logo.svg" type="button" className="btn btn-outline-light" target="_blank" download>
                                                <img src="images/Apple_Computer_Logo_rainbow.svg" style={{ height: "30px" }} /> Download Mac Version</a>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    
            </nav>
        </div>
        
    </div>
    

    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="text-center" style={{ fontSize: "5rem" }}>Radiant Sun</h1>
            </div>
        </div>
    </div>

    <div className="container">

        <div className="row">

            <div className="col"></div>

                <div className="col-md-8">

                    <div id="carouselControl" className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button data-bs-target="#carouselControl" data-bs-slide-to="0" className="active"></button>
                            <button data-bs-target="#carouselControl" data-bs-slide-to="1"></button>
                            <button data-bs-target="#carouselControl" data-bs-slide-to="2"></button>
                        </div>

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img className="d-block w-100" src="images/screenshot1.PNG" alt="Home base of the game" />
                                
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100" src="images/screenshot2.PNG" alt="Traversing the world with a party" />
                                
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100" src="images/screenshot3.PNG" alt="Battle against dark wing enemies" />
                                
                            </div>

                        </div>

                        <button className="carousel-control-prev rounded" type="button" data-bs-target="#carouselControl" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next rounded" type="button" data-bs-target="#carouselControl" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                
                </div>


            <div className="col"></div>

        </div>

    </div>

    <div className="container">
        <div className="row gy-3">

            <div className="col"></div>

            <div className="col-8">

                <h2>Game Summary</h2>
                <p>
                    In the distant future, humans are born with magical abilities. The city of New Gem heroes called "Knights" protect people from those who wish to abuse 
                    their powers. These people are known as "Outlaws."
                    In New Gem City, a young man named Adam hopes to one day be a Knight. Unfortunately, he was born powerless. Not deterred by fate Adam 
                    creates a magical suit of armor to protect the city from the local gang called Dark Wings. Along the way, he will make new friends and learn what 
                    being a hero means.            
                </p>
            </div>
            
            <div className="col"></div>

        </div>
    </div>

    <div className="container bg-dark" id="game-demos">
        <h2 style={{ color: "white" }}>Play the game in the browser on desktop</h2>
        <p className="color: white">The game button below will launch the game in your browser in a new tab.</p>
        <a href="demo/index.html" className="btn btn-primary" target="_blank" rel="noreferrer">Desktop Game Demo</a>

        <p className="color: white">Not on desktop? Play the game in your phone or tablet browser instead.</p>
        <a href="demomobile/silver_sun/www/index.html" className="btn btn-secondary" target="_blank" rel="noreferrer">Mobile Game Demo</a>
    </div>  

    <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
                    <div className="card-header">Saving the Game</div>
                    <div className="card-body">
                        <h3 className="card-title">Use the game menu to save the game</h3>
                        <p className="card-text">
                            Save files are stored in the browser's save data. The game save will not leave you device and will not be sent to the internet.
                            <br />
                            To resume the game, open the game in the same browser on the same device.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col">
                <h1 className="text-center">How to Play</h1>
                <div className="row">
                    <div className="col">
                        <p>
                            Mouse = Click on any menu item you'd like :)

                            <br>

                            Arrow Keys = Navigate menu and move character

                            <br>

                            Enter = Confirm

                            <br>

                            Spacebar = Jump 
                        </p>
                    </div>

                    <div className="col">
                        <p>
                            ESC or X = Open menu

                            <br>

                            ESC = Back

                            <br>

                            F = Check enemy unit data

                            <br>

                            I = Show game objective hint

                            <br>

                            Shift + Arrow keys = Sprint

                        </p>
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
                                    <img src="images/UC_Riverside_seal.svg" className="width:80px;" className="d-inline" />
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
                                    <img src="images/California_State_University,_Fullerton_seal.svg" style={{ width: "80px" }} className="d-inline" />
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
  );
}
