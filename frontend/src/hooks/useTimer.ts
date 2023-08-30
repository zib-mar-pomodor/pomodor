import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSettings } from '../contexts/SettingProvider';
import bellRing from '../assets/sounds/bell-ring.wav';

export const useTimer = () => {
  const { rounds, workDuration, shortBreakDuration, longBreakDuration } =
    useSettings();
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(workDuration * 60);

  const playSound = () => {
    new Audio(bellRing).play();
  };

  const phaseArray = useMemo<number[]>(
    () =>
      Array.from({ length: rounds * 2 }, (_, i) => {
        if (i % 2 === 0) return workDuration;
        return i === rounds * 2 - 1 ? longBreakDuration : shortBreakDuration;
      }),
    [rounds, workDuration, shortBreakDuration, longBreakDuration]
  );

  const handleStartBtn = useCallback(() => {
    setIsRunning(prevState => !prevState);
  }, []);

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

    if (isRunning && timeLeft > 0) {
      intervalId = window.setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    if (isRunning && timeLeft <= 0) {
      playSound();
      setTimeout(() => alert("Nice"), 1000);
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
