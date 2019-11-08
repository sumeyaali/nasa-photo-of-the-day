import React, {useState, useEffect} from "react";
import NasaCards from "./NasaCards";
import axios from "axios";
import { Container} from "reactstrap";



export default function  NasaGrid (){
    const [picture, setPicture]=useState([])

useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=1t1uYKkEfd9eF66YZPi6KWAsMdviOZSe7OG5HDvW')
    .then(response => {
        console.log(response)
        setPicture(response.data)
    })

    .catch(error => {
        console.log("Sorry, no photos to show", error)
    })

},[])
return (
    <Container className="container"> 
        <NasaCards picture={picture}
        date={picture.date}
        explanation={picture.explanation}
        img={picture.hdurl}
        title={picture.title}/>

    </Container>
)

}

