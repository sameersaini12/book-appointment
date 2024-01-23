import './App.css';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import LandingPage from './LandingPage';
import CityDoctors from './CityDoctors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage />} 
          />
          <Route 
            path="/city/:city" 
            element={<CityDoctors />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
