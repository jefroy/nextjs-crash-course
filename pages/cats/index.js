import React from 'react'
import {CardBody, CardGroup, Container} from "reactstrap";
import NavbarCat from "../../components/NavbarCat/Navbar";
import {useEffect, useState} from "react";
import CardCat from "../../components/CardCat/CardCat";

export default function Index() {
    const [cats, setCats] = useState([])

    const fetchCats = async () => {
        const response = await fetch('/api/cats')
        const data = await response.json()
        setCats(data)
    }

    useEffect(() => {
        fetchCats()
    }, [])

    return (
        <div>
            <NavbarCat />
            <Container>
                <CardGroup>
                    {cats.map(cat => (
                        <CardCat className={"p-2"} key={cat.id} props={cat} />
                    ))}
                </CardGroup>
            </Container>
        </div>
    )
}
