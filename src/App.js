import Blog from "./components/Blog";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import './App.css'

import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const {isDark} = useContext(AppContext)
  return (
  
  // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <div className={`"wrapper min-h-screen flex flex-col  items-center ${isDark ? " bg-black text-white" : " " }`}>
    <Header/>

    <Blog/>

    <Pagination/>
    
    
    </div>
  
  
  
  
  
  
  );
}

