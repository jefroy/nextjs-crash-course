import React from "react"
import {Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

export default function CardCat(props) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardImg
                        alt="cyat piccha"
                        src={props.img.url}
                        top
                        width="100%"
                    />
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {props.subtitle}
                    </CardSubtitle>
                    <h3>{props.name}</h3>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                    <CardText>{props.text}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
