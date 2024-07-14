import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from './components/ui/navbar';
import Home from './pages/home';
import { OrbitingCirclesDemo } from "./components/example/animated-orbitating-circle-demo";
import { isMobile } from "react-device-detect";


function App() {
  return (
    <Router>
      {isMobile ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
