import { BrowserRouter as Router, Route, Routes , Outlet } from 'react-router-dom';
import './App.css';
import Carousal from './Carousal';
import Sidebar from './SideBar';
import Footer from './Footer';
import Wave from './Wave';
import Aeroplane from './Aeroplane';
import Bus from './Bus';
import Hotel from './Hotel';
import Train from './Train';
import Passengers from './Protected/Passengers'
import ProtectedRoute from './ProtectedRoute';

const HomeLayout = () => {
  return (
    <>
      <Carousal />
      <Sidebar/>
      <Wave/>
      <Outlet />
      <Footer />
    </>
  )
}

const AuthorizedLayout = ()=>{
  return(
    <>
      <Outlet/>
    </>
  )
}
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} >
            <Route index element={<Hotel />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/train" element={<Train />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/aeroplane" element={<Aeroplane />} />
          </Route>

          <Route path="user/*" element={<ProtectedRoute isAuthenticated={'true'}><AuthorizedLayout /></ProtectedRoute>} >
          <Route index element={<Passengers />} />
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
