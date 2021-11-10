import logo from './logo.svg';
import './App.css';
import SelectCountryAndCity from './components.js/selectCountryAndCity';
import DetailsView from './components.js/detailsView';

function App() {
  return (
    <div className="App">
      {/* <SelectCountryAndCity></SelectCountryAndCity> */}
      <DetailsView></DetailsView>
    </div>
  );
}

export default App;
