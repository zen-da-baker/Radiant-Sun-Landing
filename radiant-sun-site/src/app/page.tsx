import { Header } from "@/page-components/Header";
import { Carousel } from "@/page-components/Carousel";
import { AboutGame } from "@/page-components/AboutGame";
import { Schools } from "@/page-components/Schools";
import { Team } from "@/page-components/Team";
import { MessageForm } from "@/page-components/MessageForm";
import { Footer } from "@/page-components/Footer";

import "../../styles/main.css";
import "../../styles/typography.css";

export default function Home() {

  return (
    <main>
    
        <Header />

        <Carousel />

        <AboutGame />

        <Schools />

        <Team />

        <MessageForm />
            
        <Footer />
    
    </main>
  )
}
