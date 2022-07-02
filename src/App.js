import './App.css';
import Sitios from './components/Sitios';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

function App() {

  function scroll() {
    document.querySelector('.App-main').scrollIntoView({ 
      behavior: 'smooth' 
    })};

  return (
    <div className="App">
      <header className="App-header"> 
        <h1 className='main-title'>Documentación Telecomunicaciones</h1>
        <KeyboardArrowDownRoundedIcon className='KeyboardArrowDownRoundedIcon' onClick={scroll} />
      </header>
      <div className='vertical-tabs hello'>
      </div>
      <div className='App-main'>
        <Sitios/>
      </div>
      
    </div>
  );
}

export default App;
