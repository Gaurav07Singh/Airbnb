import React from "react";
import grid from "../images/grid.png";  

function Hero()
{
    return(
        <section className="hero">
            <img className="hero--logo" src={grid} alt="logo"/>
            <h1>Online Experiences</h1>
            <p>Join uniue interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    );
}

export default Hero;