import { useCallback, useEffect, useState } from 'react';

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  const handleStartBtn = useCallback(() => {
    setIsRunning(prevState => !prevState);
  }, [setIsRunning]);

  const handleRestartBtn = useCallback(() => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }, [setIsRunning, setTimeLeft]);

  const handleSkipBtn = useCallback(() => {
    setTimeLeft(10);
  }, [setTimeLeft]);

  useEffect(() => {
    let intervalId: number | undefined;

    const asyncTimer = async () => {
      return Promise.resolve(
        setInterval(() => {
          setTimeLeft(oldTime => oldTime - 1);
        }, 1000)
      );
    };

    if (isRunning && timeLeft > 0) {
      asyncTimer().then(number => (intervalId = number));
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timeLeft, isRunning]);

  return {
    isRunning,
    timeLeft,
    handleSkipBtn,
    handleRestartBtn,
    handleStartBtn,
  };
};
