import { Header } from "./page-components/Header";
import { Carolsel } from "./page-components/Carolsel";
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

        <Schools />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <hr />
                    </div>
                </div>
            </div>


        <Team />

        <a href="#" className="btn btn-secondary" id="back-to-top">Back to Top</a>
            
        <Footer />
    
    </body>
  )
}
