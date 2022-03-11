import React from "react";
import './Card.css'
import Player from "./Player";

const Card = ({ artist, eid, genre, song, display, demo }) => {
    return (
        <div className="card">
            <img src={display}></img>
            <div className="el">
                <h2 className="glossy">#{eid}</h2>
                <h2>Artist: {artist}</h2>
                {/* <p>{genre}</p> */}
                <h3># {song}</h3>
                <Player url={demo}/>
            </div>
        </div>
    )
}

export default Card