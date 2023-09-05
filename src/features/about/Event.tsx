import React, { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { DateTime } from 'luxon';
import './Event.css';

type EventProps = {
  title: string;
  time: Date;
  timezone: string;
  additionalText: string;
};

export const Event: React.FC<EventProps> = ({
  title,
  time,
  timezone,
  additionalText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log(time)
  return (

    <div>
      <div className="event">
        <div className='title-and-time'>
          <div className="title">{title}</div>
          <div className="time">{time.getTime()} {timezone==="America/Los_Angeles" ? "PST" : "EST"}</div>
        </div>
        <div className="dropdown-icon" onClick={toggleDropdown}>
          <PlusCircleIcon className="small-icon"/>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p>{additionalText}</p>
        </div>
      )}
    </div>
  );
};
