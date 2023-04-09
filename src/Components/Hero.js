import React from "react";  

function Hero()
{
    return(
        <section className="hero">
            {/*<img className="hero--logo" src={grid} alt="logo"/>*/}
            <img className = "hero--logo" src = "./images/grid.png"/>
            <h1>Online Experiences</h1>
            <p>Join uniue interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    );
}

export default Hero;