import { createContext, useEffect, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface DarkModeContextValue {
  handleDarkModeChange: () => void;
}

const DarkModeContext = createContext<DarkModeContextValue>({
  handleDarkModeChange: () => {},
});

interface DarkModeContextProviderProps {
  children: React.ReactNode;
}

export const DarkModeContextProvider: React.FC<
  DarkModeContextProviderProps
> = ({ children }) => {
  const { state: isDark, setState: setIsDark } = useLocalStorage<boolean>(
    'isDark',
    false
  );

  useEffect(() => {
    const htmlTag = document.documentElement;

    if (isDark) {
      htmlTag.classList.add('dark-mode');
    } else {
      htmlTag.classList.remove('dark-mode');
    }
  }, [isDark]);

  const handleDarkModeChange = () => {
    setIsDark(isDark => !isDark);
  };

  return (
    <DarkModeContext.Provider value={{ handleDarkModeChange }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  return context;
};
