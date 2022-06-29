import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Busqueda de documetación por Sitio
        </p>
        <a
          className="App-link"
          href="https://edenor.sharepoint.com/:u:/s/GO365_DOCUMENTACIONTELCO-DiagramasREDLAN/EcgW1gPW9P9Fon1b7EloSDIBtOW7S7_9EY2GsDa-_mGQiw?e=KYUbEp"
          target="_blank"
          rel="noreferrer"
        >
          CR Cazador
        </a>
        <div>
          <iframe width="500" height="300" frameborder="0" src="https://www.bing.com/maps/embed?h=300&w=500&cp=-34.53639175539835~-58.484577538155406&lvl=18&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
          </iframe>
          <div>
            <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=-34.53639175539835~-58.484577538155406&amp;sty=r&amp;lvl=17.117753950046435&amp;FORM=MBEDLD">Maximizar</a> &nbsp; | &nbsp;
            <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=-34.53639175539835~-58.484577538155406&amp;sty=r&amp;lvl=17.117753950046435&amp;rtp=~pos.-34.53639175539835_-58.484577538155406____&amp;FORM=MBEDLD">Cómo llegar</a>
          </div>
        </div>
        <ul>
          <li>Localidad: El Cazador</li>
          <li>Partido: Escobar</li>
          <li>Región: 3</li>
        </ul>
        <a
          className="App-link"
          href="https://edenor.sharepoint.com/:u:/s/GO365_DOCUMENTACIONTELCO-DiagramasREDLAN/EcFYo8FUKZxBgQNlxWUods0BeNcc0erdZBzb9h5e-yGgzg?e=Pu73OG"
          target="_blank"
          rel="noreferrer"
        >
          CR El Cruce
        </a>
        <ul>
          <li>Localidad: Dique Lujan</li>
          <li>Partido: Tigre</li>
          <li>Región: 3</li>
        </ul>
        <a className="App-link" href='https://edenor.sharepoint.com/:i:/s/GO365_DOCUMENTACIONTELCO-FOTOS/EVheW9nADfRKtg59eLcReK0BdBFOqM1jsGoRdMQGtVbpxg?e=PDHGOn'>Foto rack</a>
      </header>
    </div>
  );
}

export default App;
