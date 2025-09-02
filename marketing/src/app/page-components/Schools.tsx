export function Schools() {

    return (
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
    )
}