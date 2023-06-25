
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Project} from "./components/Project";
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter as Router , Routes  , Route, createHashRouter } from "react-router-dom";
function App() {
   const routes = createHashRouter
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    );

    }

export default App;

