import { Navbar, Button, Form, FormControl, NavDropdown, Nav } from 'react-bootstrap'
import musicImg from '../../img/musicImg.png'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/App.scss'


function NavigationCopy2() {
    return (
        <Navbar bg="light" expand="lg">

            <img src={musicImg} className='navImg' alt='Music Symbol'/>
            <Navbar.Brand href="/">Asianfy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>

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

                    <Nav.Link href="/delete-all">Delete All</Nav.Link>
                </Nav>

                <Form inline className='search'>
                    <FormControl type="text" placeholder="Be curious!" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationCopy2;