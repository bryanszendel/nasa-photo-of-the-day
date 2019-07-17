// Building out the NASA card that will show an image

import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard.js";
import randomDate from "./randomDate.js";

function CardContainer() {
    // NASA KEY: https://api.nasa.gov/planetary/apod?api_key=JmvQUr9DIoMy0TsbX9mx0ZbTpbVnMDiWhUdFBCIg
    const [nasaData, setNasaData] = useState([])
    const [date, setDate] = useState('2012-3-14')
    let start = new Date(2001, 0, 1)
    let end = new Date()
    
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=JmvQUr9DIoMy0TsbX9mx0ZbTpbVnMDiWhUdFBCIg&date=${date}`)
            .then(response => {
                const cards = response.data;
                console.log('NASA API Response: ', cards)
                setNasaData(cards)
            })
            .catch(error => {
                console.log('ERROR ==> ', error)
            })
    }, [date])

    return (
        <div className="card-container">
            <button onClick={() => setDate(`${randomDate(start, end)}`)}>Change Content</button>
            <NasaCard imgUrl={nasaData.url} data={nasaData} />
        </div>

    )
}

export default CardContainer;