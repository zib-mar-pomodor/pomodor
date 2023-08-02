import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';


const StyledLabel = styled.button`
  color: var(--color-grey-50);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  border-radius: 16px;
  padding: 4px 8px;

  
  & .icon {
    width: 24px;
  }
  
  &:active {
    box-shadow: 0 2px 2px rgba(88, 170, 216, 0.2);
  }

  &.active {
    background-color: var(--color-sea-blue-light);
    color: var(--color-black);
  }
  `;

interface ButtonProps {
  onClick: () => void
  children: ReactNode
  isActive: boolean
}

export const Label = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledLabel
      type="button"
      className={(props.isActive) ? 'active' : ''}
      {...props}
    >
      {children}
    </StyledLabel>
  );
};
