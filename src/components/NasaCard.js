import React from "react"
import MediaType from "./MediaType.js"
import { Container, Header } from "semantic-ui-react"

function NasaCard(props) {
    console.log("what is data?", props)
    return (
        <Container className="nasa-card">
            <Container textAlign="justified" className="card-content">
                <MediaType imgUrl={props.data.url} mediaType={props.data.media_type} mediaTitle={props.data.title}/>
                <Header as="h2" textAlign="center">{props.data.title}</Header>
                <p>{props.data.explanation}</p>
            </Container>
        </Container>
    )
}

export default NasaCard;