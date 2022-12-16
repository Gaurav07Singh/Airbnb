import React from 'react';

import star from "../images/star.png";
import data from "../data.js";


function Card(props)
{
    return(
        <div class = "main-2">
            <div className="card">
                <img src = {`../images/${props.img}`}  className="card--image" />
                <div className="card--stats">
                    <img src={star} class = "card--star"/>
                    <span>{props.rating}</span>
                    <span> ({props.noOfPeople}) </span>
                    <span>{props.country}</span>
                </div>
                <p>{props.topic}</p>
                <p><span className="bold">From $<span>{props.price}</span></span> / person</p>
            </div>

            {/* <div className="card">
                <img src={ankur} className="card--image" />
                <div className="card--stats">
                    <img src={star} class = "card--star"/>
                    <span>{props.rating}</span>
                    <span> ({props.noOfPeople}) </span>
                    <span>{props.country}</span>
                </div>
                <p>{props.topic}</p>
                <p><span className="bold">From $<span>{props.price}</span></span> / person</p>
            </div> */}


        </div>

    )
}

export default Card;