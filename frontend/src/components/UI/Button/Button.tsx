import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  color: rgba(0, 0, 0, 0.87);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #fff;
  text-transform: uppercase;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(88, 170, 216, 0.2);
  transition: all 0.1s ease-in;

  & .icon {
    width: 24px;
  }

  &:disabled {
    opacity: 50%;
  }

  &:active {
    box-shadow: 0 2px 2px rgba(88, 170, 216, 0.2);
  }
`;

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  style? : {width: string};
}

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      type="button"
      {...props}
    >
      {children}
    </StyledButton>
  );
};
