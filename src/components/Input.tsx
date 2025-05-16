import React from 'react';

interface InputProps {
    onChange: (value: string) => void
    value: string 
    placeholder?: string
    type?: string
    label?: string
}

const Input: React.FC<InputProps> = ({onChange, value, placeholder, type, label}) => {
    return (
        <div className='flex flex-col gap-1 items-start w-full'>
            <label className='text-xs text-gray-700'>{label}</label>
            <input
            className='border w-full rounded-lg bg-neutral-50 p-2 border-gray-400 outline-none placeholder:text-gray-300 placeholder:text-sm text-gray-800'
            type={type || "text"}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
          />

        </div>
    );
};

export default Input;