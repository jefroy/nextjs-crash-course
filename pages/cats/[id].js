import React from 'react'
import {CardBody, CardGroup, Container} from "reactstrap";
import NavbarCat from "../../components/NavbarCat/Navbar";
import {useEffect, useState} from "react";
import CardCat from "../../components/CardCat/CardCat";
import {useRouter} from "next/router";
import DetailsCat from "../../components/DetailsCat/DetailsCat";

export default function Cat() {
    const [cat, setCat] = useState(null)

    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        const fetchCat = async () => {
            if (id){
                const response = await fetch(`/api/cats/${id}`)
                const data = await response.json()
                setCat(data)
            }
        }
        fetchCat()
    }, [id])

    return (
        <div>
            <NavbarCat />
            <Container>
                {/*put cat here*/}
                {cat && (
                    <DetailsCat props={cat} />
                )}
                {/*<p>eat shit n die</p>*/}
            </Container>
        </div>
    )
}
