import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes as Switch, Link, HashRouter  } from 'react-router-dom';
import CollapsibleExample from "./components/Navbar"
import App from './App';
import Home from './components/Home';
import AdjustableBase from './components/AdjustableBase';
import AdjustableBaseDetails from './components/AdjustableBaseDetails';
import Pillows from './components/Pillows';
import PillowDetails from './components/PillowDetails';
import MemoryFoam from './components/MemoryFoam';
import MemoryFoamDetails from './components/MemoryFoamDetails';
import Hybrid from './components/Hybrid';
import HybridDetails from './components/HybridDetails';
import Springs from './components/Springs';
import SpringsDetails from './components/SpringsDetails';
import Mattresses from './components/Mattresses';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
        <Switch >
            <Route exact path='/' element={<Home />} />
            <Route exact path='/adjustable' element={<AdjustableBase />} />
            <Route exact path='/Pillows' element={<Pillows />} />
            <Route exact path='/adjustable/:id' element={<AdjustableBaseDetails />}/>
            <Route exact path='/Pillows/:id' element={<PillowDetails />}/>
            <Route exact path='/memory-foam' element={<MemoryFoam />} />
            <Route exact path='/memory-foam/:id' element={<MemoryFoamDetails />} />
            <Route exact path='/hybrid' element={<Hybrid />} />
            <Route exact path='/hybrid/:id' element={<HybridDetails />} />
            <Route exact path='/springs' element={<Springs />}/>
            <Route exact path='/springs/:id' element={<SpringsDetails />} />
            <Route exact path='/mattresses' element={<Mattresses />}/>
            <Route exact path='/cart' element={<Cart />}/>
          </Switch>
    </HashRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

