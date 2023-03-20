import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes, Outlet, Navigate } from 'react-router-dom'
import Login from './views/login/Login';
import PrivateRoutes from './components/layout/PrivateRoutes';
import Layout from './components/layout/Layout';
import PublicRoutes from './components/layout/PublicRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="*" element={<Layout />} exact />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router >
  );
}

export default App;