export function Header() {

    return (
        <div>
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation" style={{ paddingRight: "10px" }}>
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
    )
}