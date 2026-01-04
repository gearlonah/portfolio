import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'outline' | 'glass';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-between rounded-full px-6 py-3 font-bold transition-all duration-300 text-sm uppercase tracking-wider";
  
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-brand-green text-black hover:bg-white hover:scale-105",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    glass: "bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <span className="ml-3 bg-black/10 rounded-full p-1">
           <ArrowRight size={16} className="text-current" />
        </span>
      )}
    </button>
  );
};