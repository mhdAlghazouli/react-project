import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes as Switch, Link  } from 'react-router-dom';
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
    <Router>
      <CollapsibleExample />
      

        <Switch >
            <Route path='/' element={<Home />} />
            <Route path='/adjustable' element={<AdjustableBase />} />
            <Route path='/Pillows' element={<Pillows />} />
            <Route path='/adjustable/:id' element={<AdjustableBaseDetails />}/>
            <Route path='/Pillows/:id' element={<PillowDetails />}/>
            <Route path='/memory-foam' element={<MemoryFoam />} />
            <Route path='/memory-foam/:id' element={<MemoryFoamDetails />} />
            <Route path='/hybrid' element={<Hybrid />} />
            <Route path='/hybrid/:id' element={<HybridDetails />} />
            <Route path='/springs' element={<Springs />}/>
            <Route path='/springs/:id' element={<SpringsDetails />} />
            <Route path='/mattresses' element={<Mattresses />}/>
            <Route path='/cart' element={<Cart />}/>
          </Switch>
      
      
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

