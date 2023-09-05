import React from 'react'
import { MainLayout } from '@/components/Layout'
import { Button } from '@/components/Elements/Button'
import { Head } from '@/components/Head'
import './Landing.css'

export const Landing = () => {
  return (
    <MainLayout>
      <div className="landing-page">
        <div className="landing-page-text">
          <h1 className="big-text">One Call Away.</h1>
          <div className="text-and-button">
            <p className="small-text">Sending words of warmth, care, and love to your partner.</p>
            <a href="/about"><Button text="Learn More" /></a>
          </div>
        </div>
      </div>
      <Head title="Landing Page" description="The annual Husband Calling contest at the low State Fair is an entertaining event that has seen more than 500 contestants and over 2,000 spectators from around the country gather to share little moments of affection. Contestants take turns on stage in speaking to their partner, competing to be the dearest and most loving of all. It is a great way of strengthening relationships and fostering a community of love." />
    </MainLayout>
  )
}