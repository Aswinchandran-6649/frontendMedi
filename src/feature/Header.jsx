import React, { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import { Pill, Menu, X } from "lucide-react";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  );
  const location = useLocation();


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 dark:bg-violet-500 text-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <div className="flex items-center gap-2">
          <Pill className="w-6 h-6 text-white" />
          <h1 className="font-bold text-xl">MediTrack</h1>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === "/" ? "font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/form"
            className={`hover:underline ${
              location.pathname === "/form" ? "font-semibold" : ""
            }`}
          >
            Add Medicine
          </Link>



          <div className="flex items-center gap-3 ml-4">
            <p className="text-sm text-green-900 font-extrabold">{time}</p>
          </div>
        </nav>

 
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 bg-blue-500 dark:bg-gray-700 rounded-lg"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

   
      {menuOpen && (
        <div className="md:hidden bg-blue-700 dark:bg-gray-900 flex flex-col text-center p-3 space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/form" onClick={() => setMenuOpen(false)}>
            Add Medicine
          </Link>
          <p className="text-sm">{time}</p>
        </div>
      )}
    </header>
  );
}

export default Header;
