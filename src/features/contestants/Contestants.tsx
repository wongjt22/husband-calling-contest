import React from 'react'
import { MainLayout } from '@/components/Layout'
import { Contestant } from './Contestant'
import './Contestants.css'

export const Contestants = () => {

  const contestants = [
    {
      name: "Joe",
      imageUrl: "https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg"
    },
    {
      name: "Joe",
      imageUrl: "https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg"
    },
    {
      name: "Joe",
      imageUrl: "https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg"
    },
    {
      name: "Joe",
      imageUrl: "https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg"
    }
  ]
  return (
    <MainLayout>
      <h1>Contestants</h1>
      <div className='contestants'>
        {contestants.map(contestant => (
          <Contestant name={contestant.name} imageUrl={contestant.imageUrl}/>
        ))}
      </div>
    </MainLayout>
  )
}

