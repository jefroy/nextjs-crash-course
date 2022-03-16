import React from 'react'
import {CardBody, CardGroup, Container} from "reactstrap";
import NavbarCat from "../../components/NavbarCat/Navbar";
import {useEffect, useState} from "react";
import CardCat from "../../components/CardCat/CardCat";
import DefaultLayout from "../../layouts/Default";

export default function Index() {
    console.log("i wa hug she and ellie :(")
    const [cats, setCats] = useState([])
    
    useEffect(() => {
        const fetchCats = async () => {
            const response = await fetch('/api/cats')
            const data = await response.json()
            setCats(data)
        }
        fetchCats()
    }, [])

    return (
        <div>
            <DefaultLayout>
                <CardGroup>
                    {cats.map(cat => (
                        <CardCat className={"p-2"} key={cat.id} props={cat} />
                    ))}
                </CardGroup>
            </DefaultLayout>
        </div>
    )
}
