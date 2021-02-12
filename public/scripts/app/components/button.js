import React from 'react';

const Button = ({ ...props }) => {
  return (
    <button
      className="rounded-md bg-button hover:bg-buttonFocused py-2 px-4 text-white font-bold text-sm"
      {...props}
    />
  );
};

export default Button;
