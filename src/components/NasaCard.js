import React from "react"
import MediaType from "./MediaType.js"

function NasaCard(props) {
    console.log("what is data?", props)
    return (
        <div className="nasa-card">
            <MediaType imgUrl={props.data.url} mediaType={props.data.media_type}/>
            <div className="card-content">
                <h2>{props.data.title}</h2>
                <p>{props.data.explanation}</p>
            </div>
        </div>
    )
}

export default NasaCard;