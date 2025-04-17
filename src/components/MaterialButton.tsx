import React, { useRef, useState } from 'react';

interface MaterialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const MaterialButton: React.FC<MaterialButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  fullWidth = false,
  icon,
  children,
  className = '',
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  let rippleCount = 0;

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    if (!buttonRect) return;
    
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;
    
    const newRipple = {
      x,
      y,
      id: rippleCount++
    };
    
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(prevRipples => prevRipples.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const getButtonClasses = () => {
    let baseClasses = 'relative overflow-hidden rounded-md font-medium transition-all duration-300 focus:outline-none click-effect animate-fade-in';
    
    if (fullWidth) {
      baseClasses += ' w-full';
    }
    
    if (variant === 'filled') {
      if (color === 'primary') {
        baseClasses += ' bg-leiah-orange text-white hover:bg-opacity-90 active:bg-opacity-95 px-6 py-3';
      } else {
        baseClasses += ' bg-leiah-blue text-white hover:bg-opacity-90 active:bg-opacity-95 px-6 py-3';
      }
    } else if (variant === 'outlined') {
      if (color === 'primary') {
        baseClasses += ' border-2 border-leiah-orange text-leiah-orange hover:bg-leiah-orange/5 px-6 py-[10px]';
      } else {
        baseClasses += ' border-2 border-leiah-blue text-leiah-blue hover:bg-leiah-blue/5 px-6 py-[10px]';
      }
    } else if (variant === 'text') {
      if (color === 'primary') {
        baseClasses += ' text-leiah-orange hover:bg-leiah-orange/5 px-4 py-2';
      } else {
        baseClasses += ' text-leiah-blue hover:bg-leiah-blue/5 px-4 py-2';
      }
    }
    
    return `${baseClasses} ${className}`;
  };

  return (
    <button
      ref={buttonRef}
      className={getButtonClasses()}
      onMouseDown={addRipple}
      {...props}
    >
      {icon && <span className="mr-2 animate-bounce-custom">{icon}</span>}
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </button>
  );
};

export default MaterialButton;
