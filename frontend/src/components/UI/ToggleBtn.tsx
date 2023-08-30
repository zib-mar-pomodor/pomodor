import { useState } from 'react';
import styled, { css } from 'styled-components';
import { SettingsActionType } from '../../actions/settingActions';
import { useSettings } from '../../contexts/SettingProvider';

interface StyledSwitcher {
  $isActive: boolean;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledSwitcher = styled.div<StyledSwitcher>`
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
    transition: 0.2s;
  }

  & .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.2s;
  }

  & .slider.round {
    border-radius: 34px;
  }

  & .slider.round:before {
    border-radius: 50%;
  }

  ${props =>
    props.$isActive &&
    css`
      .slider {
        background-color: #2196f3;
      }
      .slider:before {
        transform: translateX(26px);
      }
    `}
`;

interface ToggleBtnProps {
  title: string;
  option: boolean;
  action: () => SettingsActionType;
}

export const ToggleBtn = ({ title, option, action }: ToggleBtnProps) => {
  const [isActive, setIsActive] = useState(option);
  const { settingsDispatcher } = useSettings();

  const handleToggle = () => {
    setIsActive(!isActive);
    settingsDispatcher(action());
  };

  return (
    <StyledLabel>
      <input
        type="checkbox"
        checked={isActive}
        onChange={handleToggle}
        style={{ display: 'none' }}
      />

      {title}
      <StyledSwitcher
        $isActive={isActive}
        className="switch"
      >
        <span className="slider round"></span>
      </StyledSwitcher>
    </StyledLabel>
  );
};
