import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import musicImg from '../../img/musicImg.png'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/App.scss'


function Navigation() {
    return (
        <Navbar className='justify-content-center' bg="custom" variant="cutom">
            <img src={musicImg} className='navImg' alt='Music Symbol'/>
            <Nav className="nav" bg="custom">
                <Nav.Link id='links' href="/">Home</Nav.Link>
                <Nav.Link id='links' href="/artists">Artists</Nav.Link>
                <Nav.Link id='links' href="/countries">Countries</Nav.Link>
                <Nav.Link id='links' href="/genres">Genres</Nav.Link>
                <Nav.Link id='links' href="/about">About</Nav.Link>
                
            </Nav>
            <Form inline className='search'>
                <FormControl type="text" placeholder="Be curious!" className="searchBox" />
                <Button className='button' variant="custom">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Navigation;