import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import CatalogPage from './pages/CatalogPage';
import DetailsPage from './pages/DetailsPage';
import NotFound from './pages/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
