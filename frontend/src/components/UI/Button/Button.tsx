import { PropsWithChildren, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface StyleButtonProps {
  $small?: boolean;
  $isActive?: boolean;
}

const StyledButton = styled.button<StyleButtonProps>`
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

  ${props => props.$small && css`
  text-transform: unset;
  color: var(--color-grey-50);
  background-color: transparent;
  border-radius: 16px;
  padding: 4px 8px;
  box-shadow: none;

  &:active {
    box-shadow: none;
  }
  `}

  ${props => props.$isActive && css`
  background-color: var(--color-sea-blue-light);
    color: var(--color-black);
  `}
`;

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  style? : {width: string};
  $small?: boolean;
  $isActive?: boolean;
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
