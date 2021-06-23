import './Styles/App.scss';
import logo from './logo.png';
import NavigationCopy2 from './Components/Navigation/NavigationCopy2';
import Home from './Components/Home/Home.js';
import Artists from './Components/Artists/Artists.js';
import CreateArtist from './Components/Artists/CreateArtist';
import Countries from './Components/Countries/Countries.js';
import Genres from './Components/Genres/Genres.js';
import About from './Components/About/About.js';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <>
        <div className='logoBar'>
          <img className='logoImg' src={logo} alt='Asianfy logo'/>
        </div>

        <NavigationCopy2 />

        <Container className='app-container'>
        <Row>
          <Col>
          <Switch>
            <Route path='/' exact={true} component={Home}></Route>
            <Route path='/artists' component={Artists}></Route>
            <Route path='/create-artist' component={CreateArtist}></Route>
            <Route path='/countries' component={Countries}></Route>
            <Route path='/genres' component={Genres}></Route>
            <Route path='/about' component={About}></Route>
          </Switch>
          </Col>
        </Row>
        </Container>  
      </>
    );
  }
}

export default App;
