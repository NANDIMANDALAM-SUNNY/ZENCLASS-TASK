import React from 'react'
import HomePage from './components/HomePage/HomePage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ViewProfile from './components/ViewProfile/ViewProfile'
import Action from './components/Action/Action'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/user/:id' element={<ViewProfile />} />
        <Route exact path='/action' element={<Action />} />
        <Route exact path='/action/:id' element={<Action />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
