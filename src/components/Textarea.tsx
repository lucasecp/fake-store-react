import React from 'react';

interface TextareaProps {
    onChange: (value: string) => void
    value: string 
    placeholder: string
    className: string
    label?: string
}

const Textarea: React.FC<TextareaProps> = ({onChange, value, placeholder, className, label}) => {
    return (
        <div className={className +' flex flex-col gap-1 items-start'}>
            <label className='text-xs text-gray-700'>{label}</label>
        <textarea
         className=' w-full border rounded-lg bg-neutral-50 p-2 border-gray-400 outline-none placeholder:text-gray-300 placeholder:text-sm text-gray-800'
    
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      </div>
    );
};

export default Textarea;