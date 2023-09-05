import React, { FC, MouseEvent } from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className="button-18" onClick={handleClick}>
      {text}
    </button>
  );
};