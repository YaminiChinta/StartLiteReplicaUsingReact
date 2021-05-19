import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Headpart from './components/Headpart';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Calltoaction from './components/Calltoaction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Updown from './components/Updown';

import "./components/assets/css/bootstrap.min.css";
import "./components/assets/css/default.css";
import "./components/assets/css/magnific-popup.css";
import "./components/assets/css/style.css";
import "./components/assets/css/style.css.map";
import "./components/assets/css/LineIcons.css";
function App() {
  return (
    <div >
      <Navbar/>
      <Headpart/>
      <Services/>
      <Pricing/>
      <Calltoaction/>
      <Contact/>
      <Footer/>
      <Updown/>
    </div>
  );
}

export default App;
