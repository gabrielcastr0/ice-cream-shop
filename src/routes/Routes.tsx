import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../pages/About';
import Flavors from '../pages/Flavors';
import Home from '../pages/Home';

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/flavors" element={<Flavors />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}
