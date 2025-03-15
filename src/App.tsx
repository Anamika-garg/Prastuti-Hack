import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import WasteTracking from './pages/WasteTracking';
import Profile from './pages/Profile';
import AddItem from './pages/AddItem';
import Recipes from './pages/Recipes';
import Community from './pages/Community';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/waste-tracking" element={<WasteTracking />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  );
}

export default App;