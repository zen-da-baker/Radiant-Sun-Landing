export function Carolsel() {

    return (
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
    )
}