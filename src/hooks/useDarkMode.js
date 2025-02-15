import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      JSON.parse(localStorage.getItem("darkMode")) ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode]);

  function toggleDarkMode(){
    setIsDarkMode(prev => !prev)
  }

  return [isDarkMode, toggleDarkMode]

}
