import styled from 'styled-components';

import restartIcon from '../../assets/icons/restart_icon.svg';
import skipIcon from '../../assets/icons/skip_icon.svg';
import { Button } from '../UI/Button/Button';

const StyledController = styled.div`
  display: flex;
  gap: 8px;
`;

interface ControllerProps {
  onStartBtn: () => void;
  onRestartBtn: () => void;
  onSkipBtn: () => void;
  timeLeft: number;
  isRunning: boolean;
  timeSet: number;
}

export const Controller = ({
  onStartBtn,
  onRestartBtn,
  onSkipBtn,
  timeLeft,
  isRunning,
  timeSet,
}: ControllerProps) => {
  return (
    <StyledController>
      <Button
        onClick={onRestartBtn}
        disabled={timeLeft < timeSet * 60 ? false : true}
      >
        <img
          src={restartIcon}
          alt="Restart counter"
          className="icon"
        />
      </Button>

      <Button
        onClick={onStartBtn}
        style={{ width: '90px' }}
      >
        {isRunning ? 'Stop' : 'Start'}
      </Button>

      <Button onClick={onSkipBtn}>
        <img
          src={skipIcon}
          alt="Skip pomodor"
          className="icon"
        />
      </Button>
    </StyledController>
  );
};
