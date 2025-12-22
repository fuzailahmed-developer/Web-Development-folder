// DarkModeToggle.jsx
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const selectedTheme = localStorage.getItem('selectedTheme')

  const [darkMode, setDarkModeVal] = useState(false);

  const setDarkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    setDarkModeVal(true)
    localStorage.setItem('selectedTheme', 'dark')
  }

  const setLightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light')
    setDarkModeVal(false)
    localStorage.setItem('selectedTheme', 'light')
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode()
    else setLightMode()
  }

  useEffect(() => {
    if (selectedTheme == 'dark') setDarkMode()
    else setLightMode()
  }, [])

  return (
    <label className="flex items-center cursor-pointer space-x-2">
      <div className="relative">
        <input
          type="checkbox"
          checked={darkMode}
          className="sr-only"
          onChange={toggleTheme}
        />
        <div className={`w-14 h-7 ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} rounded-full shadow-inner`}></div>
        <div
          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${darkMode ? "translate-x-7" : ""
            } flex items-center justify-center`}
        >
          {darkMode ? <FaSun className="text-yellow-400 text-xs" /> : <FaMoon className="text-gray-700 text-xs" />}
        </div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
