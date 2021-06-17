import './App.scss';
import logo from './logo.png';
import searchIcon from './img/searchIcon.png';

function App() {
  return (
    <>
      <div className='logoBar'>
        <img className='logoImg' src={logo} alt='Asianfy logo'/>
      </div>

      <div className='searchBar'>
        <img className='searchImg' src={searchIcon} alt='Asianfy logo'/>
        <input className='searchBox' placeholder='Be curious!'/>
      </div>
    </>
  );
}

export default App;
