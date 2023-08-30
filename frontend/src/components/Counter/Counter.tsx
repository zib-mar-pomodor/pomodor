import { styled } from 'styled-components';

import { useSettings } from '../../contexts/SettingProvider';
import { Controller } from './Controller';
import { Graph } from './Graph';
import { leadingZero } from '../../helpers/timerHelper';
import { useEffect } from 'react';
import { RoundIndicator } from './RoundIndicator';
import { StageIndicator } from './StageIndicator';
import { useTimerContext } from '../../contexts/TimerContext';

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
  const { isTimerInTitle } = useSettings();
  const { timeLeft, isRunning } = useTimerContext();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatedTime = `${leadingZero(minutes)}:${leadingZero(seconds)}`;

  useEffect(() => {
    if (isRunning && isTimerInTitle) {
      document.title = `${formatedTime} | Pomodor`;
    } else {
      document.title = `Pomodor`;
    }
  });

  return (
    <StyledCounter>
      <StageIndicator />
      <Graph timer={formatedTime} />

      <Controller />

      <RoundIndicator />
    </StyledCounter>
  );
};
