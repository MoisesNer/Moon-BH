import './App.css';
import React from 'react'
import { Route, Switch,} from 'react-router-dom'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import About from './pages/About'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>

      <Route path='/' component={Home} exact />
      <Route path='/rooms' component={Rooms} exact />
      <Route path='/rooms/:slug' component={SingleRoom} exact />
      <Route path='/about' component={About} />
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
