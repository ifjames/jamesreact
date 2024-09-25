import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      className="btn btn-danger"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
