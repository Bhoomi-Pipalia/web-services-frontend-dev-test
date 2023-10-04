import { useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from '@/utils/LocalStorage';

const ThemeMode = () => {

  const [themeMode, setThemeMode] = useState( getLocalStorage('theme') ? getLocalStorage('theme') : 'light' );

  const contrastTheme = themeMode === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(contrastTheme);
    root.classList.add(themeMode);

    setLocalStorage('theme', themeMode);
  }, [themeMode, contrastTheme]);

  return (
    <button onClick={() => setThemeMode(contrastTheme)}
      className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-4 py-2 rounded-lg relative block me-0 ml-auto mb-4 lg:absolute lg:right-4 lg:top-4 lg:mb-0'>
        Toggle Mode
    </button>
  )
}

export default ThemeMode;
