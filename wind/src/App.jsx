import React from "react";
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";
import Product from "./components/Product"
import Orders from "./components/Orders"
import Users from "./components/Orders"
import Banner from "./components/Banner"
import Revenue from "./components/Revenue"
import Settings from "./components/Settings"
import Logout from "./components/Logout"


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
                <Route path="/dashboard" element={
                    loggedIn ? (
                        <Dashboard />
                    ) : (
                        <Navigate to='/' />
                    )
                }
                />
            <Route  path="/product" element={<Product />} />
          <Route  path="/orders" element={<Orders />} />
          <Route  path="/users" element={<Users />} />
          <Route  path="/banner" element={<Banner />} />
          <Route  path="/revenue" element={<Revenue />} />
          <Route  path="/settings" element={<Settings />} />
          <Route  path="/logout" element={<Logout />} />
          </Routes>
            </div>
        </Router>
    )
}

export default App;
