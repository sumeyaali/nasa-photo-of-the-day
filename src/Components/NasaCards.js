import React from "react"

export default function NasaCard (props) {
return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.explanation}</p>
        <p>{props.date}</p>
        <img src={props.img}/>
    </div>
)
}