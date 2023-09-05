import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { Head } from '@/components/Head'
import { MainLayout } from '@/components/Layout';
import { Button } from '@/components/Elements/Button';
import { Event } from './Event'
import './About.css'

export const About = () => {
  const [timezone, setTimezone] = useState('PST');

  const events = [
    {
      title: "Event Kickoff & Introduction",
      time: DateTime.fromObject({
        hour: 10,
        minute: 0
      }),
      timezone: 'PST',
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida turpis at dui accumsan, in tincidunt ex malesuada.',
    },
    {
      title: "Welcome Speech from Host",
      time: DateTime.fromObject({
        hour: 11,
        minute: 0
      }),
      timezone: 'PST',
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida turpis at dui accumsan, in tincidunt ex malesuada.',
    },
    {
      title: "Competition | First Round",
      time: DateTime.fromObject({
        hour: 11,
        minute: 30
      }),
      timezone: 'PST',
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida turpis at dui accumsan, in tincidunt ex malesuada.',
    },
    {
      title: "Intermission",
      time: DateTime.fromObject({
        hour: 14,
        minute: 0
      }),
      timezone: 'PST',
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida turpis at dui accumsan, in tincidunt ex malesuada.',
    },
    {
      title: "Competition | Second Round",
      time: DateTime.fromObject({
        hour: 10,
        minute: 0
      }),
      timezone: 'PST',
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida turpis at dui accumsan, in tincidunt ex malesuada.',
    },
    {
      title: "Briefing and Results",
      time: DateTime.fromObject({
        hour: 10,
        minute: 0
      }),
      timezone: 'PST',
      additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida turpis at dui accumsan, in tincidunt ex malesuada.',
    },
  ];

  function convertTimezone(dateStr: DateTime) {
    const targetTimezone = timezone === 'PST' ? 'America/Los_Angeles' : 'America/New_York';
    return dateStr.setZone(targetTimezone).toFormat('h:mm a')
  }


  return (
    <MainLayout>
      <div className='about'>
        <div className='about-us'>
          <h2>About Us</h2>
          <p>
          The annual Husband Calling contest at the low State Fair is an entertaining event that has seen more than 500 contestants and over 2,000 spectators from around the country gather to share little moments of affection. Contestants take turns on stage in speaking to their partner, competing to be the dearest and most loving of all. It is a great way of strengthening relationships and fostering a community of love.
          </p>
        </div>
        <div className='schedule'>
          <div className='schedule-and-button'>
            <h2>Schedule</h2>
            <div className='button'>
              {timezone==="PST" ? (<Button text="Convert to EST" onClick={() => setTimezone("EST")}/>) : (
              <Button text="Convert to PST" onClick={() => setTimezone("PST")}/>)
              }
            </div>
          </div>
          
          <ul>
            {events.map((event) => (
              <Event title={event.title} time={convertTimezone(event.time)} timezone={timezone} additionalText={event.additionalText}/>
            ))}
          </ul>
        </div>
      </div>
      <Head title="About" description="The annual Husband Calling contest at the low State Fair is an entertaining event that has seen more than 500 contestants and over 2,000 spectators from around the country gather to share little moments of affection. Contestants take turns on stage in speaking to their partner, competing to be the dearest and most loving of all. It is a great way of strengthening relationships and fostering a community of love." />
    </MainLayout>
  );
};
