import logo from '../assets/pomodor_logo.png';
import userIcon from '../assets/icons/user_icon.svg';
import { Button } from './UI/Button';
import styled from 'styled-components';
import { Modal } from './UI/Modal';
import { useState } from 'react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-grey-10);

  & .Header__image {
    vertical-align: bottom;
  }
`;

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <StyledHeader>
      <a href="#">
        <img
          src={logo}
          className="Header__image"
          alt="Pomodor"
        />
      </a>

      <Button onClick={() => setModalOpen(true)}>
        <img
          src={userIcon}
          alt="Login"
          className="icon"
        />
        Log in
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <div>Hello</div>
      </Modal>
    </StyledHeader>
  );
};
