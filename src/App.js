import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"

export default function App() {
  return (
    <div>
    <Routes>
      <Route>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Route>
    </Routes>
    </div>
  )
}
