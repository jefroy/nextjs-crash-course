import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavbarCat from "../components/NavbarCat/Navbar";
import JumbotronCat from "../components/JumbotronCat/JumbotronCat";
import {Container} from "reactstrap";
import Link from 'next/link'
import DefaultLayout from "../layouts/Default";

export default function Home() {
    console.log("tianna kinda cool tbh")
    return (
        <div>
            <Head>
                <title>Cat World</title>
            </Head>
            <DefaultLayout>
                <JumbotronCat />
            </DefaultLayout>
        </div>
    )
}
