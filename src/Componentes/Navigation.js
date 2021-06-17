import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import musicImg from '../img/musicImg.png'


function Navigation() {
    return (
        <Navbar className='navbar' bg="custom" variant="cutom">
            <img src={musicImg} className='navImg' alt='Music Symbol'/>
            <Nav className="nav" bg="custom">
                <Nav.Link className='home-link' href="#home">Home</Nav.Link>
                <Nav.Link className='artists-link' href="#artists">Artists</Nav.Link>
                <Nav.Link className='countries-link' href="#countries">Countries</Nav.Link>
                <Nav.Link className='genres-link' href="#genres">Genres</Nav.Link>
                <Nav.Link className='about-link' href="#about">About</Nav.Link>
                <Nav.Link className='docs-link' href="#docs">Docs</Nav.Link>
                
            </Nav>
            <Form inline className='search'>
                <FormControl type="text" placeholder="Be curious!" className="searchBox" />
                <Button className='button' variant="custom">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Navigation;