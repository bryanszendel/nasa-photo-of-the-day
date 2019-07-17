import React from "react"
import ChangeContent from "./ChangeContent";

function NasaCard(props) {
    return (
        <div className="nasa-card">
            <img src={props.imgUrl} style={{ maxWidth: '500px' }} alt="random NASA content"/>
            <div className="card-content">
                <h2>{props.data.title}</h2>
                <p>{props.data.explanation}</p>
            </div>
        </div>
    )
}

export default NasaCard;