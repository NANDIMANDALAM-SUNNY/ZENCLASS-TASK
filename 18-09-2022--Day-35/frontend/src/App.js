import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddMentors from './components/mentors/AddMentor'
import AddStudents from './components/students/AddStudents'
import ViewPage from './components/ViewPage'

const App = () => {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path='/' element={<AddMentors /> } />
              <Route exact path='/view/:id' element={<ViewPage /> } />
              <Route exact path='/students' element={<AddStudents /> } />
          </Routes>
      </Router>
    </>
  )
}

export default App