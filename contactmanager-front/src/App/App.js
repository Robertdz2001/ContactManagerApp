import logo from '../logo.svg';
import './App.css';
import AllContacts from './AllContacts/AllContacts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='header'>

        <div className='title'>
          <div className='title-icon'> <i className="gg-phone" /></div>
          <div className='title-text'> Contact Manager</div>
        </div>

      </div>


      <Router>
        <div className='Routes'>
          <Routes>
            <Route path={'/'} element={<Navigate to={'/contacts'} />} />
            <Route path="/contacts" element={<AllContacts />} />
          </Routes>
        </div>
      </Router>

    </div>

  );
}

export default App;