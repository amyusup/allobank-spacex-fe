"use client";

import React from "react";

interface ITextInputProps {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const TextInput: React.FC<ITextInputProps> = ({
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border px-3 py-2 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
    />
  );
};

export default TextInput;
