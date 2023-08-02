import { styled } from 'styled-components';
import { TimerIndicator } from './TimerIndicator';

interface Props {
  timer: string;
  timeLeft: number;
  timeSet: number;
}

const StyledGraph = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & .timer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: Abel, sans-serif;
    font-size: 48px;
    color: var(--color-sea-blue);
  }
`;

export const Graph = ({ timer, timeLeft, timeSet }: Props) => {
  const percent: number = ((60 * timeSet - timeLeft) / (60 * timeSet)) * 100;

  return (
    <StyledGraph>
      <div className="timer">{timer}</div>
      <TimerIndicator percent={percent} />
    </StyledGraph>
  );
};
