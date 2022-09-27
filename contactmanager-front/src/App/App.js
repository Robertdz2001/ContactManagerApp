import logo from '../logo.svg';
import './App.css';
import { AllContactsRouter } from './AllContacts/AllContacts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AddContactRouter } from './AddContact/AddContact';
import { UpdateContactRouter } from './UpdateContact/UpdateContact';
import { ViewContactRouter } from './ViewContact/ViewContact';
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
            <Route path="/contacts" element={<AllContactsRouter />} />
            <Route path="/contacts/add" element={<AddContactRouter />} />
            <Route path="/contacts/update/:id" element={<UpdateContactRouter />} />
            <Route path="/contacts/:id" element={<ViewContactRouter />} />
          </Routes>
        </div>
      </Router>

    </div>

  );
}

export default App;
