export function AboutGame() {

    return (
        <div>
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
        </div>
    )
}