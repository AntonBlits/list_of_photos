import './App.css';
import { Routes, Route } from 'react-router-dom';
import { PhotosPage } from './pages/PhotosPage';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';

function App() {
   return (
      <div className="App">
         <Navigation />
         <Routes>
            <Route path='/' element={<PhotosPage />} />
            <Route path='/about' element={<AboutPage />} />
         </Routes>
      </div>
   );
}

export default App;
