import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode; // Optional icon element
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...props
}) => {
  const baseStyle = "whitespace-nowrap rounded-md font-medium h-10 px-4 transition-all duration-300 text-lg flex items-center justify-center gap-2 disabled:opacity-50";

  let variantStyle = '';
  switch (variant) {
    case 'primary':
      // Matches the original "Sign in with GitHub" style, adaptable
      variantStyle = 'bg-cyan-500 text-white hover:bg-cyan-600'; // Simplified hover
      break;
    case 'secondary':
      // Example secondary style (adapt as needed)
      variantStyle = 'bg-zinc-700 text-white hover:bg-zinc-600';
      break;
    case 'danger':
       // Example danger style (like disconnect)
       variantStyle = 'bg-red-600 text-white hover:bg-red-700';
       break;
    // Add more variants if needed
  }

  // Combine base, variant, and any custom classes passed via props
  const combinedClassName = `${baseStyle} ${variantStyle} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;