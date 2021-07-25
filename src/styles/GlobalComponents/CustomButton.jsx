import React from 'react';
import { StyledButton } from './CustomButton.style';

const Button = (props) => (
    <StyledButton alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
      <StyledButton alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</StyledButton>
    </StyledButton>
  );
  
  export default Button