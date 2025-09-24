'use client';

import { useEffect, useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isToday
} from 'date-fns';
import { ArrowLeft, ArrowRight } from '@/public/assets/icons/icons';

const DatePicker = ({ selectedDate, setSelectedDate, setShowDatePicker }) => {
  const [viewDate, setViewDate] = useState(selectedDate || new Date());

  useEffect(() => {
    if (selectedDate) setViewDate(selectedDate);
  }, [selectedDate]);

  const today = new Date();
  const tomorrow = addDays(today, 1);
  const isAnyDate = !selectedDate;
  const isTodaySelected = selectedDate && isSameDay(selectedDate, today);
  const isTomorrowSelected = selectedDate && isSameDay(selectedDate, tomorrow);

  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(viewDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <button
          type='button'
          key={day}
          onClick={() => {
            setSelectedDate(cloneDay);
            setShowDatePicker(false);
          }}
          className={`w-10 h-10 text-sm font-medium flex items-center justify-center rounded-lg transition-colors cursor-pointer
            ${
              isSameDay(day, selectedDate)
                ? 'bg-primary text-white'
                : isToday(day)
                ? 'hover:bg-[#F5F7FA] border border-primary text-primary'
                : 'hover:bg-[#F5F7FA] text-gray-700'
            }
            ${!isSameMonth(day, monthStart) ? 'opacity-30 pointer-events-none' : ''}
          `}
        >
          {formattedDate}
        </button>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className='flex gap-2' key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return (
    <div
      className='transition bg-white border-[#E1E4EA] rounded-2xl border animate-fadeIn p-2 shadow-[0_16px_32px_-12px_#0E121B1A] cursor-default'
      tabIndex={-1}
      onMouseDown={e => e.preventDefault()}
    >
      {/* Day */}
      <div className='flex gap-2 mb-4'>
        <button
          type='button'
          className={`px-3 py-2 rounded-lg border transition-colors text-sm font-medium ${
            isAnyDate
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-primary border-primary hover:bg-primary/90 hover:text-white cursor-pointer transition-colors'
          }`}
          onClick={() => {
            setSelectedDate(null);
            setShowDatePicker(false);
          }}
        >
          Any Date
        </button>
        <button
          type='button'
          className={`px-3 py-2 rounded-lg border transition-colors text-sm font-medium ${
            isTodaySelected
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-primary border-primary hover:bg-primary/90 hover:text-white cursor-pointer transition-colors'
          }`}
          onClick={() => {
            setSelectedDate(today);
            setShowDatePicker(false);
          }}
        >
          Today
        </button>
        <button
          type='button'
          className={`px-3 py-2 rounded-lg border transition-colors text-sm font-medium ${
            isTomorrowSelected
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-primary border-primary hover:bg-primary/90 hover:text-white cursor-pointer transition-colors'
          }`}
          onClick={() => {
            setSelectedDate(tomorrow);
            setShowDatePicker(false);
          }}
        >
          Tomorrow
        </button>
      </div>

      {/* Month */}
      <div className='flex items-center justify-between mb-2 bg-[#F5F7FA] p-1.5 rounded-lg'>
        <button
          type='button'
          className='size-6 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 cursor-pointer'
          onClick={() => setViewDate(subMonths(viewDate, 1))}
        >
          <ArrowLeft className='size-5' />
        </button>
        <span className='text-[#525866] font-medium text-sm'>{format(viewDate, 'MMMM yyyy')}</span>
        <button
          type='button'
          className='size-6 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 cursor-pointer'
          onClick={() => setViewDate(addMonths(viewDate, 1))}
        >
          <ArrowRight className='size-5' />
        </button>
      </div>

      {/* Days */}
      <div className='flex justify-between mb-1 text-[#99A0AE] font-medium text-sm'>
        {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => (
          <div className='w-10 text-center' key={d}>
            {d}
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-y-2'>{rows}</div>
    </div>
  );
};

export default DatePicker;
