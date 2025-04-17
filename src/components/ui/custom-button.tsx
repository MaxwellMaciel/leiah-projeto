
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MaterialButton from '../MaterialButton';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  href?: string;
  animationDelay?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  fullWidth = false,
  icon,
  href,
  animationDelay = 0,
  className,
  ...props
}) => {
  const buttonClassName = cn(
    className || '',
    animationDelay > 0 ? `animate-scale delay-${animationDelay * 100}` : ''
  );

  if (href) {
    return (
      <Link to={href}>
        <MaterialButton
          variant={variant}
          color={color}
          fullWidth={fullWidth}
          icon={icon}
          className={buttonClassName}
          {...props}
        >
          {children}
        </MaterialButton>
      </Link>
    );
  }

  return (
    <MaterialButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      icon={icon}
      className={buttonClassName}
      {...props}
    >
      {children}
    </MaterialButton>
  );
};

export default CustomButton;
