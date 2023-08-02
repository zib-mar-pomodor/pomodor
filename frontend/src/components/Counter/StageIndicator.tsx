import { styled } from 'styled-components';

type StageIndicatorProps = {
  rounds: number;
};


const StyledStageIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-black);
  position: absolute;
  bottom: -16px;
  transform: translateY(100%);

  span:first-of-type {
    color: var(--color-grey-50)
  }
`;

export const StageIndicator = ({ rounds }: StageIndicatorProps) => {
  return (
    <StyledStageIndicator>
      <span>{`#${rounds}`}</span>
      <span>SESSION</span>
    </StyledStageIndicator>
  );
};
