import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';

const StyledDialog = styled.dialog`
  border: none;
  padding: 0;
  background: rgba(30, 11, 240, 0.5);
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  &[open] {
    display: flex;
  }

  & > div {
    background-color: #fff;
    padding: 40px;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(54, 6, 212, 0.1);
  }

  & button {
    margin-top: 10px;
    cursor: pointer;
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  const handleEscapeKey: KeyboardEventHandler<HTMLDialogElement> = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <StyledDialog
      ref={dialogRef}
      onClick={onClose}
      onKeyDown={handleEscapeKey}
    >
      <div onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </StyledDialog>
  );
};
