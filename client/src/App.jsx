// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/dashboard/:team_code" element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import TeamMembers from './components/TeamMembers';
import MainHome from './components/MainHome';
import DocumentSharing from './components/DocumentSharing';
import AddMember from './components/test';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for MainHome (new dashboard) */}
          <Route path="/home" element={<MainHome />} />

          {/* Route for Signup */}
          <Route path="/signup" element={<Signup />} />

          {/* Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Route for Add Member */}
          <Route path="/add" element={<AddMember />} />

          {/* Route for Team Members */}
          <Route path="/team/:team_code" element={<TeamMembers />} />

          {/* Route for Document Sharing */}
          <Route path="/documents" element={<DocumentSharing />} />

          {/* Default Route (Landing Page) */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;