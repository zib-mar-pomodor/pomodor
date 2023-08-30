import styled, { css } from 'styled-components';

import { Button } from './UI/Button';
import optionsIcon from '../assets/icons/options_icon.svg';
import { useSettings } from '../contexts/SettingProvider';
import { ToggleBtn } from './UI/ToggleBtn';
import { RangeInput } from './UI/RangeInput';
import { actions } from '../actions/settingActions';
import { useTimerContext } from '../contexts/TimerContext';
import { useState } from 'react';

interface StyledSettingsTabProps {
  $settingsOpen: boolean;
}

const StyledSettingsTab = styled.div<StyledSettingsTabProps>`
  min-width: 350px;
  max-width: 400px;
  padding: 24px;
  position: absolute;
  z-index: 10;
  color: var(--color-black);
  background-color: var(--color-white);
  border-left: 1px solid var(--color-grey-10);
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.25s ease-in-out;
  transform: translateX(100%);

  ${props =>
    props.$settingsOpen &&
    css`
      transform: translateX(0%);
    `}
`;

interface StyledFormProps {
  $isFormActive: boolean;
}

const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.25s ease-in-out;

  ${props =>
    !props.$isFormActive &&
    css`
      position: relative;
      opacity: 0.6;
      pointer-events: none;
    `}
`;


export const SettingsTab = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const {
    workDuration,
    shortBreakDuration,
    longBreakDuration,
    rounds,
    isNotifications,
    isTimerInTitle,
    autoStart,
  } = useSettings();
  const { timeLeft, phaseArray, stageIndex } = useTimerContext();

  const timeSet = phaseArray[stageIndex];

  return (
    <StyledSettingsTab $settingsOpen={settingsOpen}>
      <StyledForm
        className="form"
        $isFormActive={timeLeft < timeSet * 60 ? false : true}
      >
        <RangeInput
          value={workDuration}
          label="Work duration"
          min={10}
          max={60}
          action={actions.setWorkAction}
        />

        <RangeInput
          value={shortBreakDuration}
          label="Short brak duration"
          min={1}
          max={15}
          action={actions.setShortBreakAction}
        />

        <RangeInput
          value={longBreakDuration}
          label="Long brak duration"
          min={1}
          max={40}
          action={actions.setLongBreakAction}
        />

        <RangeInput
          value={rounds}
          label="Rounds"
          min={1}
          max={10}
          action={actions.setRoundsAction}
        />

        <ToggleBtn
          action={actions.toggleAutoStartAction}
          title="Auto Start"
          option={autoStart}
        />
        <ToggleBtn
          action={actions.toggleTimerInTitleAction}
          title="Timer in title"
          option={isTimerInTitle}
        />
        <ToggleBtn
          action={actions.toggleNotificationsAction}
          title="Notifications"
          option={isNotifications}
        />
      </StyledForm>

      <Button
        onClick={() => setSettingsOpen(currState => !currState)}
        $isTab
        style={{ left: '-49px' }}
      >
        <img
          src={optionsIcon}
          alt="Settings tab"
        />
      </Button>
    </StyledSettingsTab>
  );
};
