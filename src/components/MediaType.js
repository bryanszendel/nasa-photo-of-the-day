import React from "react";
import { Image, Loader } from "semantic-ui-react";

export default function MediaType(props) {
    console.log('Media Type Props', props)
    if (!props.imgUrl) {
        return <Loader />
    } else if (props.mediaType === "image") {
        return <Image src={props.imgUrl} size="large" rounded floated="left" alt={props.mediaTitle}/>
    } else {
        return <iframe src={props.imgUrl} title={props.mediaTitle}></iframe>
    }
}