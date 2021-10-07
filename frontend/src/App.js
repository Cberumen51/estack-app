import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import WorkWithUs from './components/pages/WorkWithUs/WorkWithUs';
import AuthModal from './components/pages/AuthModal/AuthModal';
import './App.css';

function App() {
  const [isModalOpen, onModalToggle] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar onModalToggle={onModalToggle} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/workwithus' exact component={WorkWithUs} />
        </Switch>
        <AuthModal isModalOpen={isModalOpen} onModalToggle={onModalToggle} />
      </Router>
    </div>
  );
}

export default App;
