import styled, { css } from 'styled-components';

interface StyledToggleBtn {
  isActive?: boolean;
}

const StyledToggleBtn = styled.div<StyledToggleBtn>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  & .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  & .slider.round {
    border-radius: 34px;
  }

  & .slider.round:before {
    border-radius: 50%;
  }

  ${props => props.isActive && css`
    .slider {
      background-color: #2196F3
    }
    .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  `}
`;

interface ToggleBtnProps {
  isActive?: boolean;
}

export const ToggleBtn = ({ isActive }: ToggleBtnProps) => {
  return (
    <StyledToggleBtn className="switch" isActive={isActive}>
      <span className="slider round">
      </span>
    </StyledToggleBtn>
  );
};
