import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Route path = '/'  components = {Home}/>
    <Route path = '/about' components = {About}/>
    <Route path = '/contact' components = {Contact} />
    <Navigation />
  </div>
);

export default App;
