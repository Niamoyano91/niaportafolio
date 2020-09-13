import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Proyects from './components/pages/Proyects'
import Consulting from './components/pages/Consulting'



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/proyects' exact component={Proyects}/>
        <Route path='/consulting' exact component={Consulting}/>
        <Route path='/' exact component={Home}/>

      </Switch>
    </Router>


  )
}

export default App
