import React from 'react';

import data from "../data.js";


function Card(props)
{
    let badgeText;
    if(props.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online")
    {
        badgeText = "ONLINE"
        
    }
    return(
        <div class = "main-2">
            <div className="card">
               {/*} <img src = {`../images/${props.img}`}  className="card--image" /> */}
               {<img src = {`./images/${props.item.img}`} className = "card--image" />}
                <div className="card--stats">
                    {/*<img src={star} class = "card--star"/>*/}
                    <img className = "card--star" src = "./images/star.png"/>
                    <span>{props.item.rating}</span>
                    <span> ({props.item.noOfPeople}) </span>
                    <span>{props.item.country}</span>
                </div>
                <p>{props.item.topic}</p>
                <p><span className="bold">From $<span>{props.item.price}</span></span> / person</p>
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