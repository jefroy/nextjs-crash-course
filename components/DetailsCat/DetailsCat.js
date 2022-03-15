import React from "react"
import {Button, Card, CardBody, CardGroup, CardHeader, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Cat} from '../../models/Cat'

export default function DetailsCat({props}) {
    let cat = new Cat(props)
    return (
        // <p>eat shit n die again</p>
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
                    tianna was here xoxo
                </CardSubtitle>
                <CardText>
                    {cat.name} <br/>
                    {cat.desc} <br/>
                    {cat.phone} <br/>
                    {cat.email}
                </CardText>
                {/*<Button active={true} href={`/cats/${cat.id}`}>cyat deets UwU</Button>*/}
            </CardBody>
        </Card>
    )
}
