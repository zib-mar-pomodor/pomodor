import logo from '../assets/pomodor_logo.png';
import userIcon from '../assets/icons/user_icon.svg';
import { Button } from './UI/Button/Button';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-grey);

  & .image {
    vertical-align: bottom;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <a href="#">
        <img
          src={logo}
          className="image"
          alt="Pomodor"
        />
      </a>

      <Button onClick={() => {}}>
        <img
          src={userIcon}
          alt="Login"
          className="icon"
        />
        Log in
      </Button>
    </StyledHeader>
  );
};
