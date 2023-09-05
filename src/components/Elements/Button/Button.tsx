import React, { FC, MouseEvent, CSSProperties } from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  fontSize?: number;
};

export const Button: FC<ButtonProps> = ({ text, onClick, fontSize }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const style: CSSProperties = {
    fontSize: fontSize ? `${fontSize}px` : 'inherit',
  };

  return (
    <button className="button-18" onClick={handleClick} style={style}>
      {text}
    </button>
  );
};
