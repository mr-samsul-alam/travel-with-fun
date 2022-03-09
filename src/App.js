import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './conponants/Home/Home';
import Services from './conponants/Services/Services';
import Header from './conponants/Header/Header';
import About from './conponants/About/About';
import Review from './conponants/Review/Review';
import DashBoard from './conponants/Dashboard/DashBoard';
import Footer from './conponants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="review" element={<Review />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
