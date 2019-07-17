// Building out the NASA card that will show an image

import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard.js";

function CardContainer() {
    // NASA KEY: https://api.nasa.gov/planetary/apod?api_key=JmvQUr9DIoMy0TsbX9mx0ZbTpbVnMDiWhUdFBCIg
    const [container, setContainer] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=JmvQUr9DIoMy0TsbX9mx0ZbTpbVnMDiWhUdFBCIg&date=2012-03-14`)
            .then(response => {
                const cards = response.data.url;
                console.log('NASA API Response: ', cards)
                setContainer(cards)
            })
            .catch(error => {
                console.log('ERROR ==> ', error)
            })
    }, [])

    return (
        <div className="card-container">
            <NasaCard imgUrl={container}/>
        </div>

    )
}

export default CardContainer;