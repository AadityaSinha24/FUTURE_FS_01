// import React from 'react'
// import { useEffect, useState } from 'react';
// import {Moon, Sun} from 'lucide-react'
// import { cn } from '../lib/utils';

// function ToggleTheme() {
//     const [isDardMode, setIsDarkMode] = useState(false);

//     useEffect(() =>{
//         const storedTheme = localStorage.getItem("theme");

//         if(storedTheme==="dark"){
//             setIsDarkMode(true);
//             document.documentElement.classList.add("dark");

//         }else{
//             localStorage.setItem("theme","light");
//             setIsDarkMode(false);
//         }
//     },[isDardMode])

//     const toggleTheme = () =>{
//         if(isDardMode) {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme","light");
//             setIsDarkMode(false);
//         } else{
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme","dark");
//             setIsDarkMode(true);
//         }
//     };
//   return (
//     <div>
//         <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300","focus:outline-hidden")}>
          
//             {isDardMode? 
//             <Sun className='h-6 w-6 text-yellow-300' /> 
//             : 
//             <Moon className='h-6 w-6 text-blue-900' />}
//         </button>
//     </div>
//   )
// }

// export default ToggleTheme

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-red-900" />
      )}
    </button>
  );
}

export default ToggleTheme;