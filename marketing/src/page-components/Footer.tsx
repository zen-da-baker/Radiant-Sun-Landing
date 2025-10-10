import "../../styles/footer.css";

import logo from "../../public/icons/bytesized-orange.png";

export function Footer() {
    
    return (
        <footer className="page-footer" >

            <p className="text-center">

                &copy; 2023 Radiant Sun Devs

            </p>

            <p>
                
                Website by 

                <img src={ logo.src } height={ 20 } width={ 20 } alt="Orange fruit" /> 

                <span id="bytesized">ByteSized Crew</span>

            </p>

        </footer>
    )
}