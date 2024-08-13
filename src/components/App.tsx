import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';
import '../constants/styles/theme.css';
import '../constants/styles/global.css';
import NavProvider from '../context/NavProvider';
import { ROUTES } from '../constants/routes';

const App = () => {
  return (
    <NavProvider>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DETAILS} element={<Details />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      </Routes>
    </NavProvider>
  );
};

export default App;
