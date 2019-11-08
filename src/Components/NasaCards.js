import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function NasaCard (props) {
return (

    <Card className="card">
        
        <CardBody className="body">
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardImg top width="100%" height="100%" src={props.img} alt="Daily" />
          <CardText>{props.explanation}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

    
)
}