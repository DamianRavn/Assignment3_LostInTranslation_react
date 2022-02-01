import { Nav, Container, Navbar } from 'react-bootstrap';

function HeaderGuest() {
    return (
        <Navbar className="color-nav-guest" variant="light" expand="xl">
            <Container>
                <Navbar.Brand href="#home">Translatron - Your connection with Deaf People</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderGuest;
