import { Routes, Route } from 'react-router-dom'

import AllMeetupsPage from './page/AllMeetups';
import NewMeetupsPage from './page/NewMeetups';
import FavoritesPage from './page/Favorites';

import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}></Route>
        <Route path='/new-meetups' element={<NewMeetupsPage />}></Route>
        <Route path='/favorites' element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
