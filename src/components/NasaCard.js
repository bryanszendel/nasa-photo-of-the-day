import React from "react"

function NasaCard({ imgUrl }) {
    return (
        <div className="nasa-card">
            <img src={imgUrl} style={{ maxWidth: '250px' }} alt="Nasa Image of the Day"/>
        </div>
    )
}

export default NasaCard;