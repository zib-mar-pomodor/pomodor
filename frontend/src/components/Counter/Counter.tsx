import { styled } from 'styled-components';

import { Controller } from './Controller';
import { Graph } from './Graph';
import { useTimer } from '../../hooks/useTimer';
import { leadingZero } from '../../helpers/timerHelper';
import { useEffect } from 'react';
import { Button } from '../UI/Button/Button';
import { StageIndicator } from './StageIndicator';

const StyledCounter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background-color: var(--color-grey-02);
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(88, 170, 216, 0.2);

  & .mode-switcher {
    display: flex;
    gap: 8px;
  }
`;

export const Counter = () => {
  const {
    timeLeft,
    isRunning,
    handleRestartBtn,
    handleSkipBtn,
    handleStartBtn,
    stageIndex,
    phaseArray,
    rounds,
  } = useTimer();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatedTime = `${leadingZero(minutes)}:${leadingZero(seconds)}`;

  useEffect(() => {
    document.title = `${formatedTime} Pomodor`;
  });

  return (
    <StyledCounter>
      <div className="mode-switcher">
        <Button
          $small
          $isActive={stageIndex % 2 === 0 ? true : false}
          onClick={() => {}}
        >
          Pomodor
        </Button>

        <Button
          $small
          $isActive={
            stageIndex % 2 === 1 && stageIndex !== rounds * 2 - 1 ? true : false
          }
          onClick={() => {}}
        >
          Short break
        </Button>

        <Button
          $small
          $isActive={stageIndex === rounds * 2 - 1 ? true : false}
          onClick={() => {}}
        >
          Long break
        </Button>
      </div>

      <Graph
        timer={formatedTime}
        timeLeft={timeLeft}
        timeSet={phaseArray[stageIndex]}
      />

      <Controller
        timeSet={phaseArray[stageIndex]}
        onStartBtn={handleStartBtn}
        onRestartBtn={handleRestartBtn}
        onSkipBtn={handleSkipBtn}
        timeLeft={timeLeft}
        isRunning={isRunning}
      />

      <StageIndicator 
        rounds={Math.floor(stageIndex / 2) + 1}
      />
    </StyledCounter>
  );
};
