
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/review" element={<Review></Review>}/>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
      <Route path="/blog" element={<Blog></Blog>}/>
      <Route path="/about" element={<About></About>}/>
    </Routes>
    </>
  );
}

export default App;
