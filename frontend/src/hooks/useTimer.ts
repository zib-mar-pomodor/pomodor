import { useCallback, useEffect, useMemo, useState } from 'react';
import bellRing from '../assets/sounds/bell-ring.wav';
import { useSettings } from '../contexts/SettingProvider';

export const useTimer = () => {
  const { rounds, workDuration, shortBreakDuration, longBreakDuration } =
    useSettings();
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);

  const playSound = () => {
    new Audio(bellRing).play();
  };

  const phaseArray = useMemo(
    () =>
      Array.from({ length: rounds * 2 }, (_, i) => {
        if (i % 2 === 0) {
          return workDuration;
        }

        if (i > rounds * 2 - 2) {
          return longBreakDuration;
        }

        return shortBreakDuration;
      }),
    [rounds, workDuration, shortBreakDuration, longBreakDuration]
  );

  const handleStartBtn = useCallback(() => {
    setIsRunning(prevState => !prevState);
  }, [setIsRunning]);

  const handleRestartBtn = useCallback(() => {
    setTimeLeft(phaseArray[stageIndex] * 60);
    setIsRunning(false);
  }, [stageIndex, phaseArray]);

  const handleSkipBtn = useCallback(() => {
    setStageIndex(prevStage =>
      prevStage === rounds * 2 - 1 ? 0 : prevStage + 1
    );

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
      playSound();
      handleSkipBtn();
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
  };
};
