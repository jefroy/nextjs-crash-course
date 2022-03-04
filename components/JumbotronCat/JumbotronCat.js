import React from "react"
import {Card, CardBody} from "reactstrap";

export default function JumbotronCat() {
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, Tianna!</h1>
                        <p className="lead">Sample text for my little lamb :)</p>
                        <hr className="my-4" />
                        <p>Find a cyat.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">LESGO</a>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>


    )
}
