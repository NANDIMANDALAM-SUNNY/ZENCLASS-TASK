import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Tables from './components/Tables/Tables';
import Charts from './components/Charts/Charts';
import BlankPage from './components/Pages/BlankPage/BlankPage';
import Error from './components/Pages/Error/Error';
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Colors from './components/Utilities/Colors/Colors';
import Borders from './components/Utilities/Borders/Borders';
import TopBar from './components/TopBar/TopBar';
import Animations from './components/Utilities/Animations/Animations';
import Other from './components/Utilities/Other/Other';
import Buttons from './components/Components/Buttons/Buttons';
import Cards from './components/Components/Cards/Cards';

function App() {
  return (
      <>
        <div className='row'>
        <Router>
        <div className='col-md-2'>
        <Navbar />
        </div>
        <div className='col-md-10'>
          <Routes>
            <Route exact path='/' element={<Dashboard />}/>
            <Route exact path='/tables' element={<Tables />}/>
            <Route exact path='charts' element={<Charts />}/>
            <Route exact path='/blankpage' element={<BlankPage />}/>
            <Route exact path='/pagenotfound' element={<Error />}/>
            <Route exact path='/forgotpassword' element={<ForgotPassword />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/register' element={<Register />}/>
            <Route exact path='/colors' element={<Colors />}/>
            <Route exact path='/borders' element={<Borders />}/>
            <Route exact path='/animations' element={<Animations />}/>
            <Route exact path='/other' element={<Other />}/>
            <Route exact path='/buttons' element={<Buttons />}/>
            <Route exact path='/cards' element={<Cards />}/>
          </Routes>
        </div>
        </Router>
        </div>
      </>
  );
}

export default App;
