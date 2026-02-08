import { useState } from 'react'
import { Card } from './ui/card'
import './Landing.css'

function Landing() {
  return (
    <>
        <div className="landing-wrapper">
            <h1 className='scroll-m-20 sm:text-5xl text-4xl font-bold tracking-tight text-balance'>
                Pierce Clinger
            </h1>
            <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] mt-1 sm:mt-0 font-mono sm:text-sm text-xs font-semibold">
                Software Developer
            </code>
        </div>
    </>
  )
}

export default Landing