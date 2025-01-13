import Dashboard from './Dashboard';
import RecipeDetails from './RecipeDetails';
import Navbar from './Navbar';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/search' element={<Dashboard />} />
        <Route path='/recipe/:idMeal' element={<RecipeDetails />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
