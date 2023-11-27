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
import SubOverview from './pages/Comptation/RigthNowSubPages/Overview/overview';
import SubDraw from './pages/Comptation/RigthNowSubPages/Draw/draw';
import Login from './pages/Login';
import CompRegDetail from './pages/Comptation/CompReg/detail';
import Rank from './pages/Rank';
import TeamsRegister from './pages/Profile/Pages/teams-register';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/comptation' element={<Comptation/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/rank' element={<Rank/>}/>
        <Route path='/comptation/:slug' element={<CompRegDetail/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* <Route path="/comptation-right/:slug" element={<Comptation />}>
          <Route index element={<SubOverview/>}/>
          <Route path="draw" element={<SubDraw/>}/>
        </Route> */}

        <Route path="/comptation-right/:slug" element={<RigthNowComp />}>
          <Route index element={<SubOverview/>}/>
          <Route path="draw" element={<SubDraw/>}/>
        </Route>

        <Route path="/profile" element={<Profile />}>
          <Route index element={<DashboardProfile/>}/>
          <Route path="teams" element={<Teams/>}/>
          {/* <Route path="teams-register" element={<TeamsRegister/>}/> */}
        </Route>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
