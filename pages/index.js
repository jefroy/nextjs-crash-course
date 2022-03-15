import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavbarCat from "../components/NavbarCat/Navbar";
import JumbotronCat from "../components/JumbotronCat/JumbotronCat";
import {Container} from "reactstrap";
import Link from 'next/link'

export default function Home() {
    console.log("tianna kinda cool tbh")
    return (
        <div>
            <NavbarCat />
            <Container>
                <JumbotronCat />
            </Container>
        </div>
    )
}
