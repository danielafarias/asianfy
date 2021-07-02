import { Navbar, Button, Form, FormControl, NavDropdown, Nav } from 'react-bootstrap'
import musicImg from '../../img/musicImg.png'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/Navigation.scss'


function Navigation() {

    return (
        <Navbar expand="md">

            <img src={musicImg} className='navImg' alt='Music Symbol'/>
            <Navbar.Brand href="/">Asian Music for you!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link id='basic-nav-dropdown' href="/">Home</Nav.Link>
                    <Nav.Link id='basic-nav-dropdown' href="/about">About</Nav.Link>

                    <NavDropdown title="Artits" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/artists">Go to Artists</NavDropdown.Item>
                        <NavDropdown.Item href="/create-artist">Insert Artist</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Countries" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/countries">Go to Countries</NavDropdown.Item>
                        <NavDropdown.Item href="/create-country">Insert Country</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Genres" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/genres">Go to Genres</NavDropdown.Item>
                        <NavDropdown.Item href="/create-genre">Insert Genre</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link id='basic-nav-dropdown' href="/delete-all">Delete All</Nav.Link>
                </Nav>

                <img className='gif' alt='cat gif animated' src='https://i.gifer.com/14Sw.gif'/>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;