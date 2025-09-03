import { Header } from "./page-components/Header";
import { Carousel } from "./page-components/Carousel";
import { AboutGame } from "./page-components/AboutGame";
import { GameInstructions } from "./page-components/GameInstructions";
import { Schools } from "./page-components/Schools";
import { Team } from "./page-components/Team";
import { Footer } from "./page-components/Footer";

import "../../styles/main.css";

export default function Home() {

  return (
    <body>
    
        <Header />

        <Carousel />

        <AboutGame />

        

        <Schools />

            


        <Team />

        <a href="#" className="btn btn-secondary" id="back-to-top">Back to Top</a>
            
        <Footer />
    
    </body>
  )
}
