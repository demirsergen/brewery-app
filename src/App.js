import './App.css';
import { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';

function App() {

  const [breweriesList, setBreweriesList] = useState([]);
  const [search, setSearch] = useState('');
  const url = `https://api.openbrewerydb.org/breweries?by_city=${search}`;

  useEffect(() => {
    async function getBreweriesList() {
      const response = await fetch(url);
      const data = await response.json();
      setBreweriesList(data);
    }
    getBreweriesList();
  }, [url]);

  return (
    <div className="App">
      <h1 className='title'>Brewery Finder</h1>
      <SearchBar search={search} setSearch={setSearch}/>
      {search &&
        <div className="brewery_container">
        {breweriesList.map(brewery => (
          <div key={brewery.id} className="brewery">
          <h4>Name: <span>{brewery.name}</span></h4>
          <h4>City: <span>{brewery.city}</span></h4>
          <h4>State: <span>{brewery.state}</span></h4>
          <h4>Type: <span>{brewery.brewery_type}</span></h4>
          <h4>Street: <span>{brewery.street ? brewery.street : 'N/A'}</span></h4>
          {/* <h4>Longitude: <span>{brewery.longitude ? brewery.longitude : 'N/A'}</span></h4>
          <h4>Latitude: <span>{brewery.latitude ? brewery.latitude : 'N/A'}</span></h4> */}
          <h4>Phone: <span>{brewery.phone ? brewery.phone : 'N/A' }</span></h4>
          <h4><span><a href={brewery.website_url} target="_blank" rel="noreferrer">{brewery.website_url}</a></span></h4>
          </div>
        ))}
      </div>
      }
    </div>
  );
}

export default App;
