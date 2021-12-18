import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginAnimation } from "./Animation.js";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Projects from "./Pages/Projects.js";
import Contact from "./Pages/Contact.js";
import Navbar from "./Navbar.js";

function App() {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 1000);
  }, []);
  return (
    <div className="App dark:from-gray-800 dark:to-gray-700 bg-gradient-to-br from-pink-200 to-green-200 relative">
      {!animation ? (
        <LoginAnimation />
      ) : (
        <>
          <div className="absolute top-1/3 right-48 bg-gray-100 w-20 h-20 shadow-xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 bg-pink-300 w-7 h-7 shadow-xl rounded-3xl"></div>
          <div className="absolute top-1/4 left-1/4 bg-purple-700 w-5 h-5 shadow-xl rounded-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 bg-green-400 w-16 h-16 shadow-xl rounded-3xl"></div>
          <div className="absolute top-10 left-1/2 bg-yellow-400 w-10 h-10 shadow-xl rounded-3xl"></div>
          <div className="main">
            <BrowserRouter>
              <Routes>
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/about" element={<About />} />
                <Route path="/protflio" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
