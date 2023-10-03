import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register';
import Profile from './pages/Profile';
import DashboardProfile from './pages/Profile/Pages/dashboard'
import Teams from './pages/Profile/Pages/teams'
import Comptation from './pages/Comptation';
import RigthNowComp from './pages/Comptation/right-now';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/comptation' element={<Comptation/>}/>
        <Route path='/comptation-right/:slug' element={<RigthNowComp/>}/>

        <Route path="/profile" element={<Profile />}>
          <Route index element={<DashboardProfile/>}/>
          <Route path="teams" element={<Teams/>}/>
        </Route>
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
