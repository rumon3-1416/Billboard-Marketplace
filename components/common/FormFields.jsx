'use client';

import { ArrowDown } from '@/public/assets/icons/icons';
import { useState } from 'react';

const inputStyles =
  'w-full bg-transparent placeholder-text-secondary text-text pe-4 py-3.5 ring-1 focus:ring-2 ring-border hover:ring-primary focus:ring-primary rounded-[10px] outline-none transition-colors duration-300';

export const Label = ({ label, children, className = '', htmlFor = '', ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`font-medium text-text leading-[1] ${className}`} {...props}>
      {children || label}
    </label>
  );
};

export const Input = ({
  label = '',
  Icon,
  type = 'text',
  name = '',
  id = '',
  placeholder = '',
  className = '',
  error = false,
  helperText = '',
  ...props
}) => {
  return (
    <div className={`w-full h-max relative ${label && 'flex flex-col gap-2 md:gap-4'}`}>
      {label && <Label label={label} htmlFor={name || id} />}
      <div className='w-full relative'>
        {Icon && <Icon className='size-6 text-text-secondary absolute left-4 top-3.5' />}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`${inputStyles} ${error && helperText && '!ring-red-500'} ${
            Icon ? 'ps-[52px]' : 'ps-4'
          } ${className}`}
          {...props}
        />
        {/* Error Message */}
        {error && helperText && <p className='text-red-500 text-sm mt-1 ml-1'>{helperText}</p>}
      </div>
    </div>
  );
};

export const Textarea = ({
  label,
  name = '',
  id = '',
  placeholder = '',
  className = '',
  rows = 4,
  error = false,
  helperText = '',
  ...props
}) => {
  return (
    <div className={`w-full ${label && 'flex flex-col gap-2 md:gap-4'}`}>
      {label && <Label label={label} htmlFor={name || id} />}
      <div className='w-full relative'>
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          rows={rows}
          className={`ps-4 resize-none ${inputStyles} ${error && helperText && '!ring-red-500'} ${className}`}
          {...props}
        />
        {/* Error Message */}
        {error && helperText && <p className='text-red-500 text-sm mt-1 ml-1'>{helperText}</p>}
      </div>
    </div>
  );
};

export const Select = ({
  options,
  children,
  label,
  name = '',
  id = '',
  defaultValue = '',
  className = '',
  optionClassName = '',
  error,
  helperText,
  ...props
}) => {
  return (
    <div className={`w-full h-max ${label && 'flex flex-col gap-2 md:gap-4'}`}>
      {label && <Label label={label} htmlFor={name || id} />}
      <div className='w-full relative'>
        <select
          name={name}
          id={id}
          defaultValue={defaultValue}
          className={`ps-4 !pe-12 appearance-none ${inputStyles} ${
            error && helperText && '!ring-red-500'
          } ${className}`}
          {...props}
        >
          {children}
          {options &&
            options.map((opt, idx) => {
              const { value, text, disabled, ...prop } = opt;

              return (
                <option
                  key={idx}
                  value={value}
                  disabled={disabled}
                  {...prop}
                  className={`text-text bg-bg ${optionClassName}`}
                >
                  {text}
                </option>
              );
            })}
        </select>
        <ArrowDown className='size-4 absolute right-4 top-[18px]' />
        {/* Error Message */}
        {error && helperText && <p className='text-red-500 text-sm mt-1 ml-1'>{helperText}</p>}
      </div>
    </div>
  );
};

export const Checkbox = ({ name = '', id = '', className = '', ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type='checkbox'
      name={name}
      id={id}
      onChange={e => setChecked(e.target.checked)}
      className={`w-5 min-w-5 h-5 bg-bg accent-primary appearance-none border border-border rounded-md relative cursor-pointer checked:border-primary checked:bg-primary focus:outline-none after:content-[""] after:absolute after:top-0.5 after:left-1.5 after:border-b-2 after:border-r-2 after:h-3 after:w-1.5 after:rotate-45 ${
        checked ? 'after:border-white' : 'after:border-transparent'
      } ${className}`}
      {...props}
    />
  );
};
