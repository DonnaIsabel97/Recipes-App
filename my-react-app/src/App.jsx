import Dashboard from './Dashboard';
import RecipeDetails from './RecipeDetails';
import Navbar from './Navbar';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/recipe/:idMeal' element={<RecipeDetails />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;