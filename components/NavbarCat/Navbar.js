import React from "react"
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import Link from 'next/link'
import {useRouter} from "next/router";

export default function NavbarCat() {
    const router = useRouter()
    return (
        <div>
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand
                        // onClick={() => router.push("/")}
                        href={'/'}
                    >
                        Cat World
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="https://github.com/jefroy/nextjs-crash-course">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle caret nav>
                                    Pages
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={() => router.push("/")}>
                                        Home
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={() => router.push("/cats")}>
                                        Cats
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}
