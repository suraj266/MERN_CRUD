import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './views/Dashboard/Dashboard';
import User from './views/User/User';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
