import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Sample Project</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="https://zuitt.co/" target="_blank">Zuitt</Nav.Link>
                <Nav.Link href="https://www.facebook.com/zuittcodingbootcamp/" target="_blank">Facebook Page</Nav.Link>
            </Nav>
        </Navbar>
    )
}