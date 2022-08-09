import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckContact from "./Acao/checkContact"
import AddContact from "./Acao/addContact"
import UpdateContact from "./Acao/updateContact"

function App() {
   
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckContact />} />
        <Route path="/update/:id" element={<UpdateContact />} />
        <Route path="/adicionar" element={<AddContact />} />
      </Routes>
     </BrowserRouter>
   </> 
  );
}

export default App;
