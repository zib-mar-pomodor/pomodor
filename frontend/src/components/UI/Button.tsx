import { PropsWithChildren, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface StyleButtonProps {
  $small?: boolean;
  $isActive?: boolean;
  $isTab?: boolean;
}

const StyledButton = styled.button<StyleButtonProps>`
  color: var(--color-black);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  background-color: var(--color-white);
  text-transform: uppercase;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(88, 170, 216, 0.2);
  transition: all 0.1s ease-in;
  height: 50px;

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
  height: unset;
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

  ${props => props.$isTab && css`
   position: absolute;
   top: 50%;
   border-top-right-radius: 0;
   border-bottom-right-radius: 0;
   border: 1px solid var(--color-grey-10);
   border-right: none;
   box-shadow: none;
  `}

  ${props => props.$isActive && css`
  background-color: var(--color-sea-blue-light);
    color: var(--color-black);
  `}
`;

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style? : {
    width?: string,
    backgroundColor?: string,
    left?: string,
    right?: string,
    transform?: string
  };
  $small?: boolean;
  $isActive?: boolean;
  $isTab?: boolean;
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
