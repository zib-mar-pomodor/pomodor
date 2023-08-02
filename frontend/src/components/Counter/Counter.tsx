import { styled } from 'styled-components';

import { Label } from '../UI/Label/Label'
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

  & .mode-switcher {
    display: flex;
    gap: 8px;
  }
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
      <div className="mode-switcher">
        <Label isActive={true} onClick={() => {}}>
          Pomodor
        </Label>

        <Label isActive={false} onClick={() => {}}>
          Short break
        </Label>

        <Label isActive={false} onClick={() => {}}>
          Long break
        </Label>
      </div>
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
