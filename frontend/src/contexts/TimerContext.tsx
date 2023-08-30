import { ReactNode, createContext, useContext } from 'react';
import { useTimer } from '../hooks/useTimer';

type TimerContextType = ReturnType<typeof useTimer> | null;

const TimerContext = createContext<TimerContextType>(null);

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const timerData = useTimer();

  return (
    <TimerContext.Provider value={timerData}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }
  return context;
};
