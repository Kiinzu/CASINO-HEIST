import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import Challenge from './pages/Challenge';
import Walkthrough from './pages/Walkthrough';
import Setting from './pages/Setting';
import Home from './pages/Home'; 
import Heist from './pages/Heist'; 
import Guide from './pages/Guide';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Sidebar> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/walkthrough" element={<Walkthrough />} />
            <Route path="/setting" element={<Setting />}></Route>
            {/* Use a dynamic route for the Setting page to handle different challenges */}
            <Route path="/heist/:challengeCode" element={<Heist />} />
            <Route path="/guide/:challengeCode" element={<Guide />} />
            {/* Signup - Login */}
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            {/* Navigate to Dashboard Upon successful Login */}
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </Sidebar>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;