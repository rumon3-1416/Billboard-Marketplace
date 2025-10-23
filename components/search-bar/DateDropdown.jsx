import DatePicker from '../common/DatePicker';

const DateDropdown = ({ date, setDate, setShowDropDown }) => {
  return (
    <div className='absolute right-0 top-[6rem] z-20'>
      <DatePicker selectedDate={date} setSelectedDate={setDate} setShowDatePicker={setShowDropDown} />
    </div>
  );
};

export default DateDropdown;
