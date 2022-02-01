import { Nav, Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"

function HeaderUser() {

    const username = useSelector(state => state.user.value.username);

    return (
        <Navbar className="color-nav-user" fixed="top">
            <Container>
                <NavLink to="/">Translatron - Your connection with Deaf People</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="profile">{username}'s Profile</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderUser;
