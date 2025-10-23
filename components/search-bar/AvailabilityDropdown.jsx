import React from 'react';

const AvailabilityDropdown = ({ setAvailability }) => {
  const options = [
    {
      title: 'Option 1',
      value: 'option-1'
    },
    {
      title: 'Option 2',
      value: 'option-2'
    },
    {
      title: 'Option 3',
      value: 'option-3'
    }
  ];

  return (
    <ul
      className={`absolute top-[5.6rem] inset-x-0 z-20 min-w-full px-2 py-3 bg-bg border border-dark-border rounded-[20px]`}
    >
      {options.map((option, idx) => (
        <li
          onClick={() => setAvailability(option)}
          key={idx}
          className={`hover:bg-primary/10 px-2.5 py-1.5 cursor-pointer rounded-xl transition-colors`}
        >
          {option.title}
        </li>
      ))}
    </ul>
  );
};

export default AvailabilityDropdown;
