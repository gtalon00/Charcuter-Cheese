import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Home from "./components/Home"
import {Switch} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Home />
        <Navbar />
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
