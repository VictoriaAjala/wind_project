import React from "react";
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";


function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }

    const handleLogout = () => {
        setLoggedIn(false);
    }
    
    return (
        <Router>
            <div className="w-full h-screen">
                <Routes>
                    <Route exact path='/' element={ loggedIn ? ( <Navigate to='/dashboard' /> 
                    ) : (
                        <Login onLogin={handleLogin} />
                    )
                }
                />
                <Route path="dashboard" element={
                    loggedIn ? (
                        <Dashboard />
                    ) : (
                        <Navigate to='/' />
                    )
                }
                />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
