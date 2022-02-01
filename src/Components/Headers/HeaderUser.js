import { Nav, Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function HeaderUser() {

    const username = useSelector(state => state.user.value.username);

    return (
        <Navbar className="color-nav-user" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Translatron - Your connection with Deaf People</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="profile">{username}'s Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderUser;
