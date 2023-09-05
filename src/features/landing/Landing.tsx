import React from 'react'
import { MainLayout } from '@/components/Layout'
import { Button } from '@/components/Elements/Button'
import './Landing.css'

export const Landing = () => {
  return (
    <div>
      <MainLayout>
        <div className="landing-page">
          <div className="landing-page-text">
            <h1 className="big-text">One Call Away.</h1>
            <div className="text-and-button">
              <p className="small-text">Sending words of warmth, care, and love to your partner.</p>
              <Button text="Learn More" />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}