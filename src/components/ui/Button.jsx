import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'outline-dark', 
  className = '', 
  onClick, 
  type = 'button',
  to,
  ...props 
}) => {
  const baseStyles = "px-6 md:px-10 py-3 md:py-4 cursor-pointer text-xs md:text-sm font-medium uppercase tracking-widest transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    'outline-light': "border border-white text-white hover:bg-white hover:text-black",
    'outline-dark': "border border-black text-black hover:bg-black hover:text-white",
    'solid-light': "bg-white text-black hover:bg-gray-200",
    'solid-dark': "bg-black text-white hover:bg-gray-800",
  };

  const buttonClasses = `${baseStyles} ${variants[variant] || variants['outline-dark']} ${className}`;

  if (to) {
    return (
      <Link 
        to={to} 
        className={buttonClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;