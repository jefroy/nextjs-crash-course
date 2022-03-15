import React from "react"
import {Card, CardBody} from "reactstrap";

export default function JumbotronCat() {
    console.log("she kinda cute 👀")
    return (
        <div className={"m-3"}>
            <Card>
                <CardBody>
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, Good day!</h1>
                        <p className="lead">Sample text :)</p>
                        <hr className="my-4" />
                        <p>Find a cyat.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href={"/cats"} role="button">LESGO</a>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>


    )
}
