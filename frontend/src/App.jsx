import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import CreatePage from "./pages/CreatePage";
import {Box} from '@chakra-ui/react'
import Navbar from "./components/ui/Navbar";
import { Toaster, toaster } from "@/components/ui/toaster"

function App() {
  return (
    <Box minH={"100vh"}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/add" element={<CreatePage />} />
        
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Box>
  );
}

export default App;
