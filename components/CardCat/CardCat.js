import React from "react"
import {Button, Card, CardBody, CardGroup, CardHeader, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Cat} from '../../models/Cat'

export default function CardCat({props}) {
    console.log("GO TO THE BATHROOM")
    let cat = new Cat(props)
    return (
        <Card className={"m-3"}>
            <CardImg
                alt={cat.image.alt}
                src={cat.image.url}
                top
                width="75%"
                height="50%"
            />
            <CardBody>
                <CardTitle tag="h5">Behold! Cat #{cat.id}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    more sample text
                </CardSubtitle>
                <CardText>
                    {cat.name} <br/>
                    {cat.desc} <br/>
                    {cat.phone} <br/>
                    {cat.email}
                </CardText>
                <Button active={true} href={`/cats/${cat.id}`}>cyat deets UwU</Button>
            </CardBody>
        </Card>
    )
}
