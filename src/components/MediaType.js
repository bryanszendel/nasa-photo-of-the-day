import React from "react";

export default function MediaType(props) {
    console.log('Media Type Props', props)
    if (!props.imgUrl) {
        return "...Loading"
    } else if (props.mediaType === "image") {
        return <img src={props.imgUrl} alt='text'/>
    } else {
        return <iframe src={props.imgUrl} alt="iframe"></iframe>
    }
}

// (props.mediaType === "video")