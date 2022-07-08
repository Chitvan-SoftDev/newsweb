import Home from './1_components/Home';
import NavBar from './1_components/NavBar';
import NewsList from './1_components/NewsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'//used to create routing

import './App.css';

function App() {
  return (
    <BrowserRouter>
    
      <NavBar />
      <Routes>
        <Route path='/'  element={
          <>
            <Home/>
          </>
        } />
        <Route path='/news' element={
          <NewsList/>
        } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
