import { styled } from 'styled-components';

import { Controller } from './Controller';
import { Graph } from './Graph';
import { useTimer } from '../../hooks/useTimer';
import { leadingZero } from '../../helpers/timerHelper';
import { useEffect } from 'react';

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background-color: var(--color-grey);
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(88, 170, 216, .2);
`

export const Counter = () => {
  const {
    timeLeft,
    isRunning,
    handleRestartBtn,
    handleSkipBtn,
    handleStartBtn,
  } = useTimer();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatedTime = `${leadingZero(minutes)}:${leadingZero(seconds)}`

  useEffect(() => {
    document.title = `${formatedTime} Pomodor`
  })

  return (
    <StyledCounter>
      <Graph timer={formatedTime} timeLeft={timeLeft} />
      <Controller
        onStartBtn={handleStartBtn}
        onRestartBtn={handleRestartBtn}
        onSkipBtn={handleSkipBtn}
        timeLeft={timeLeft}
        isRunning={isRunning}
      />
    </StyledCounter>
  );
};
