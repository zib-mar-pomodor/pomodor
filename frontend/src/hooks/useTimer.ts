import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTimer = () => {
  const { state: rounds } = useLocalStorage<number>('rounds', 4);
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);

  const phaseArray = useMemo(
    () =>
      Array.from({ length: rounds * 2 }, (_, i) => {
        if (i % 2 === 0) {
          return 25;
        }

        if (i > rounds * 2 - 2) {
          return 15;
        }

        return 5;
      }),
    [rounds]
  );

  const handleStartBtn = useCallback(() => {
    setIsRunning(prevState => !prevState);
  }, [setIsRunning]);

  const handleRestartBtn = useCallback(() => {
    setTimeLeft(phaseArray[stageIndex] * 60);
    setIsRunning(false);
  }, [stageIndex, phaseArray]);

  const handleSkipBtn = useCallback(() => {
    setStageIndex(prevStage => {
      if (prevStage === rounds * 2 - 1) {
        return 0;
      }

      return prevStage + 1;
    });

    setIsRunning(false);
  }, [rounds]);

  useEffect(() => {
    setTimeLeft(phaseArray[stageIndex] * 60);
  }, [stageIndex, phaseArray]);

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

    if (isRunning && timeLeft <= 0) {
      handleSkipBtn();

      if (stageIndex % 2 === 0) {
        alert("It's time for rest");
      } else {
        alert('Get back to work');
      }
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
    phaseArray,
    stageIndex,
    handleSkipBtn,
    handleRestartBtn,
    handleStartBtn,
    rounds,
  };
};
