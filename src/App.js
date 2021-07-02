// Components
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import DeleteAll from './Components/Delete/DeleteAll';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

// Artists
import ReadAllArtists from './Components/Artists/ReadAllArtists.js';
import CreateArtist from './Components/Artists/CreateArtist';
import ReadArtist from './Components/Artists/ReadArtist';
import UpdateArtist from './Components/Artists/UpdateArtist';
import DeleteArtist from './Components/Artists/DeleteArtist';

// Countries
import CreateCountry from './Components/Countries/CreateCountry';
import ReadCountry from './Components/Countries/ReadCountry';
import ReadAllCountries from './Components/Countries/ReadAllCountries';
import UpdateCountry from './Components/Countries/UpdateCountry';
import DeleteCountry from './Components/Countries/DeleteCountry';

// Genres
import CreateGenre from './Components/Genres/CreateGenre';
import ReadGenre from './Components/Genres/ReadGenre';
import ReadAllGenres from './Components/Genres/ReadAllGenres';
import UpdateGenre from './Components/Genres/UpdateGenre';
import DeleteGenre from './Components/Genres/DeleteGenre';

// Styles
import './Styles/App.scss';

//Images
import logo from './logo.png';




class App extends React.Component {
  render() {
    return (
      <>
        <div className='logoBar'>
          <img className='logoImg' src={logo} alt='Asianfy logo'/>
        </div>

        <Navigation />

        <Container className='app-container'>
        <Row>
          <Col>
          <Switch>
            <Route path='/' exact={true} component={Home}></Route>

            {/* Artists */}
            <Route path='/artists' component={ReadAllArtists}></Route>
            <Route path='/create-artist' component={CreateArtist}></Route>
            <Route path='/artist/:id' component={ReadArtist}></Route>
            <Route path='/update-artist/:id' component={UpdateArtist}></Route>
            <Route path='/delete-artist/:id' component={DeleteArtist}></Route>

            {/* Countries */}
            <Route path='/countries' component={ReadAllCountries}></Route>
            <Route path='/country/:id' component={ReadCountry}></Route>
            <Route path='/create-country' component={CreateCountry}></Route>
            <Route path='/update-country/:id' component={UpdateCountry}></Route>
            <Route path='/delete-country/:id' component={DeleteCountry}></Route>

            {/* Genres */}
            <Route path='/genres' component={ReadAllGenres}></Route>
            <Route path='/genre/:id' component={ReadGenre}></Route>
            <Route path='/create-genre' component={CreateGenre}></Route>
            <Route path='/update-genre/:id' component={UpdateGenre}></Route>
            <Route path='/delete-genre/:id' component={DeleteGenre}></Route>

            <Route path='/about' component={About}></Route>
            <Route path='/delete-all' component={DeleteAll}></Route>
          </Switch>
          </Col>
        </Row>
        </Container>  

        <div className='footer'>
          <p>© Development and design by Daniela Farias. Images are not mine. This is a non-profit student project.</p>
        </div>
      </>
    );
  }
}

export default App;
