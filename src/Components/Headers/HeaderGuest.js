import { Nav, Container, Navbar } from 'react-bootstrap';

function HeaderGuest() {
    return (
        <Navbar className="color-nav-guest" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="/">Translatron - Your connection with Deaf People</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderGuest;
