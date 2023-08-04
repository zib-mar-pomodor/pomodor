import styled, { css } from 'styled-components';

import { Button } from './UI/Button/Button';
import optionsIcon from '../assets/icons/options_icon.svg'

interface StyledSettingsTabProps {
  $settingsOpen?: boolean
}

const StyledSettingsTab = styled.div<StyledSettingsTabProps>`
  width: 200px;
  padding: 24px;
  background-color: var(--color-white);
  border-left: 1px solid var(--color-grey-10);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.25s ease-in-out;
  transform: translateX(0%);

  ${props => props.$settingsOpen && css`
  transform: translateX(100%);
  `}
`;

interface Props {
  onclick: () => void
  settingsOpen: boolean
}

export const SettingsTab: React.FC<Props> = ({ onclick, settingsOpen }: Props,) => {
  console.log('tab rendered')
  console.log(settingsOpen);
  return (
    <StyledSettingsTab $settingsOpen={settingsOpen}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sunt sint. Distinctio ducimus fugit eveniet asperiores aspernatur architecto inventore quam?</p>

      <Button onClick={onclick} $isTab style={{ left: '-49px' }}>
          <img src={optionsIcon} alt="Night mode" />
        </Button>
    </StyledSettingsTab>
  );
};