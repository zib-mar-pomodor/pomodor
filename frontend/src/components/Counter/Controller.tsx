import styled from 'styled-components';

import restartIcon from '../../assets/icons/restart_icon.svg';
import skipIcon from '../../assets/icons/skip_icon.svg';
import { Button } from '../UI/Button';
import { useTimerContext } from '../../contexts/TimerContext';

const StyledController = styled.div`
  display: flex;
  gap: 8px;
`;

export const Controller = () => {
  const {
    handleRestartBtn,
    handleSkipBtn,
    handleStartBtn,
    timeLeft,
    isRunning,
    phaseArray,
    stageIndex,
  } = useTimerContext();

  const timeSet = phaseArray[stageIndex];

  return (
    <StyledController>
      <Button
        onClick={handleRestartBtn}
        disabled={timeLeft < timeSet * 60 ? false : true}
      >
        <img
          src={restartIcon}
          alt="Restart counter"
          className="icon"
        />
      </Button>

      <Button
        onClick={handleStartBtn}
        style={{ width: '90px' }}
      >
        {isRunning ? 'Stop' : 'Start'}
      </Button>

      <Button onClick={handleSkipBtn}>
        <img
          src={skipIcon}
          alt="Skip pomodor"
          className="icon"
        />
      </Button>
    </StyledController>
  );
};
