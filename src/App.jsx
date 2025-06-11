import CurrencyCalculator from './pages/CurrencyCalculator/CurrencyCalculator';
import Clock from './pages/Clock/Clock';
import './App.css';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MagicTable from './pages/MagicTable/MagicTable';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Clock/>} />
            <Route path='/CurrencyCalculator/:currency1/:currency2' exact element={<CurrencyCalculator/>} />
            <Route path="/Table" element={<MagicTable />} />
            <Route path="/MagicTable" element={<MagicTable />} />
        </Routes>
      </Router>
  );
}

export default App;

