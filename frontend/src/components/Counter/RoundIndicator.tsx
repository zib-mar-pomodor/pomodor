import { styled } from 'styled-components';
import { useTimerContext } from '../../contexts/TimerContext';

const StyledStageIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-black);
  position: absolute;
  bottom: -16px;
  transform: translateY(100%);

  span:first-of-type {
    color: var(--color-grey-50);
  }
`;

export const RoundIndicator = () => {
  const { stageIndex } = useTimerContext();

  return (
    <StyledStageIndicator>
      <span>{`#${Math.floor(stageIndex / 2) + 1}`}</span>
      <span>SESSION</span>
    </StyledStageIndicator>
  );
};
