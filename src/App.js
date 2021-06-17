import './App.scss';
import logo from './logo.png';
import Navigation from './Componentes/Navigation';
import Highlight from './Componentes/Highlight';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <div className='logoBar'>
          <img className='logoImg' src={logo} alt='Asianfy logo'/>
        </div>
        <Navigation />
        <Highlight />
    
      </>
    );
  }
}

export default App;
