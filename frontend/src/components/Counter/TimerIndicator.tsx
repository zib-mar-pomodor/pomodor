import { keyframes, styled } from 'styled-components';

type TimerIndicatorProps = {
  percent: number;
};

const progress = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`;

const StyledSvg = styled.svg`
  display: block;
  min-width: 350px;
  max-width: 800px;
  max-height: 800px;

  & .circle {
    stroke: var(--color-sea-blue);
    fill: none;
    stroke-width: 0.1;
    stroke-linecap: round;
    animation: ${progress} 1s ease-out forwards;
  }

  & .circle-bg {
    fill: none;
    stroke: var(--color-dark-grey);
    opacity: 90%;
    stroke-width: 0.1;
  }
`;

export const TimerIndicator = ({ percent }: TimerIndicatorProps) => {
  return (
    <StyledSvg
      viewBox="0 0 36 36"
    >
      <path
      className='circle-bg'
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#aaa"
        strokeWidth="1"
      />

      <path
      className='circle'
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#aaa"
        strokeWidth="1"
        strokeDasharray={`${percent},100`}
      />
    </StyledSvg>
  );
};
