import { Navbar, Button, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import musicImg from '../../img/musicImg.png'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/App.scss'


function NavigationCopy() {
    return (
        <Navbar className='justify-content-center' bg="custom" variant="cutom">
            <img src={musicImg} className='navImg' alt='Music Symbol'/>

            <DropdownButton id="dropdown-basic-button" title="Home">
                <Dropdown.Item href="/">Go to Home</Dropdown.Item>
                <Dropdown.Item href="/insert-home">Insert Content</Dropdown.Item>
                <Dropdown.Item href="/update-home">Update Content</Dropdown.Item>
                <Dropdown.Item href="/delete-home">Delete All Content</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Artists">
                <Dropdown.Item href="/artists">Go to Artists</Dropdown.Item>
                <Dropdown.Item href="/insert-artist">Insert Artist</Dropdown.Item>
                <Dropdown.Item href="/delete-all-artists">Delete All Artists</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Countries">
                <Dropdown.Item href="/countries">Go to Countries</Dropdown.Item>
                <Dropdown.Item href="/insert-country">Insert Country</Dropdown.Item>
                <Dropdown.Item href="/delete-all-countries">Delete All Countries</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Genres">
                <Dropdown.Item href="/">Go to Genres</Dropdown.Item>
                <Dropdown.Item href="/insert-genre">Insert Genre</Dropdown.Item>
                <Dropdown.Item href="/delete-all-genres">Delete All Genres</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="About">
                <Dropdown.Item href="/">Go to About</Dropdown.Item>
                <Dropdown.Item href="/update-about">Update About</Dropdown.Item>
                <Dropdown.Item href="/delete-about">Delete All About</Dropdown.Item>
            </DropdownButton>
            
            <Form inline className='search'>
                <FormControl type="text" placeholder="Be curious!" className="searchBox" />
                <Button variant="primary">Search</Button>
            </Form>

           </Navbar>
    );
}

export default NavigationCopy;