import { Nav, Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

function HeaderUser() {

    const username = useSelector(state => state.user.value.username);

    return (
        <Navbar className="color-nav-user" fixed="top">
            <Container>
                <Link to="/">Translatron - Your connection with Deaf People</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="profile">{username}'s Profile</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderUser;
