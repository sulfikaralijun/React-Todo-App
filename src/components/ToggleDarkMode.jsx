import React from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

const ToggleDarkMode = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div onClick={toggleDarkMode} className="absolute top-5 right-5 rounded-full p-2 outline-2 outline-gray-200 outline-offset-2 border border-gray-200 cursor-pointer dark:border-gray-500 dark:outline-gray-500">
      {isDarkMode ? (
        <Sun size={16} color="white" />
      ) : (
        <Moon size={16} color="black" />
      )}
    </div>
  );
};

export default ToggleDarkMode;
