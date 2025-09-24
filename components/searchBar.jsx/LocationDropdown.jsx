const LocationDropdown = ({ setLocation }) => {
  const locations = [
    {
      title: 'Current Location',
      value: 'Current Location'
    },
    {
      title: 'Location 1',
      value: 'Location 1'
    },
    {
      title: 'Location 2',
      value: 'Location 2'
    }
  ];

  return (
    <ul
      className={`absolute top-[5.6rem] inset-x-0 z-20 min-w-full px-2 py-3 bg-bg border border-dark-border rounded-[20px]`}
    >
      {locations.map((location, idx) => (
        <li
          onClick={() => setLocation(location.value)}
          key={idx}
          className={`hover:bg-primary/10 px-2.5 py-1.5 cursor-pointer rounded-xl transition-colors`}
        >
          {location.title}
        </li>
      ))}
    </ul>
  );
};

export default LocationDropdown;
