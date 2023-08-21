
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import PostsPage from './pages/PostsPage';
import Postform from './pages/Postform';

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/post' element={<PostsPage />} />
          <Route path='/uploadPost' element={<Postform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
