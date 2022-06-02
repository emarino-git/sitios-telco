import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Busqueda de documetación por Sitio
        </p>
        <a
          className="App-link"
          href="https://edenor.sharepoint.com/:u:/s/GO365_DOCUMENTACIONTELCO-DiagramasREDLAN/EcgW1gPW9P9Fon1b7EloSDIBtOW7S7_9EY2GsDa-_mGQiw?e=KYUbEp"
          target="_blank"
        >
          CR Cazador
        </a>
        <ul>
          <li>Localidad: El Cazador</li>
          <li>Partido: Escobar</li>
          <li>Región: 3</li>
        </ul>
        <a
          className="App-link"
          href="https://edenor.sharepoint.com/:u:/s/GO365_DOCUMENTACIONTELCO-DiagramasREDLAN/EcFYo8FUKZxBgQNlxWUods0BeNcc0erdZBzb9h5e-yGgzg?e=Pu73OG"
          target="_blank"
        >
          CR El Cruce
        </a>
        <ul>
          <li>Localidad: Dique Lujan</li>
          <li>Partido: Tigre</li>
          <li>Región: 3</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
