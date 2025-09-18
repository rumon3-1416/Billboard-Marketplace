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
    <div className={`w-full relative ${label && 'flex flex-col gap-2 md:gap-4'}`}>
      {label && <Label label={label} htmlFor={name || id} />}
      {Icon && <Icon className='size-6 text-text-secondary absolute left-4 bottom-3.5' />}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${inputStyles} ${Icon ? 'ps-[52px]' : 'ps-4'} ${className}`}
        {...props}
      />
      {error && helperText && <p className='text-red-500 text-sm mt-1 ml-1'>{helperText}</p>}
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
    <div className={`w-full relative ${label && 'flex flex-col gap-2 md:gap-4'}`}>
      {label && <Label label={label} htmlFor={name || id} />}
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        className={`ps-4 resize-none ${inputStyles} ${className}`}
        {...props}
      />
      {error && helperText && <p className='text-red-500 text-sm mt-1 ml-1'>{helperText}</p>}
    </div>
  );
};

export const Select = ({ options, name = '', id = '', defaultValue = '', className = '', ...props }) => {
  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      className={`${inputStyles} ${className}`}
      {...props}
    ></select>
  );
};

export const Checkbox = ({ name = '', id = '', className = '', ...props }) => {
  let checked = false;

  return (
    <input
      type='checkbox'
      name={name}
      id={id}
      onChange={e => (checked = e.target.checked)}
      className={`w-5 min-w-5 h-5 accent-primary appearance-none border border-[#DDE0E6] rounded-md relative cursor-pointer checked:border-primary checked:bg-primary focus:outline-none after:content-[""] after:absolute after:top-0.5 after:left-1.5 after:border-b-2 after:border-r-2 after:h-3 after:w-1.5 after:rotate-45 ${
        checked ? 'after:border-white' : 'after:border-transparent'
      } ${className}`}
      {...props}
    />
  );
};
