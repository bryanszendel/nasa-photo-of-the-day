// Building out the NASA card that will show an image

import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard.js";
import randomDate from "./randomDate.js";
import { Container, Button, Icon, Menu } from "semantic-ui-react";

function CardContainer() {
    // NASA KEY: https://api.nasa.gov/planetary/apod?api_key=JmvQUr9DIoMy0TsbX9mx0ZbTpbVnMDiWhUdFBCIg
    const [nasaData, setNasaData] = useState([])
    const [date, setDate] = useState('2019-07-18')
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
        <Container>
            <Menu>
                <Menu.Item position="right" name="Choose Date">CONTENT CHANGER
                </Menu.Item>
                <Menu.Item position="left" name="Random Content" onClick={() => setDate(`${randomDate(start, end)}`)}>Choose Date</Menu.Item>
            </Menu>
            <Container className="card-container">
                <NasaCard data={nasaData}></NasaCard>
            </Container>
        </Container>
    )
}

export default CardContainer;