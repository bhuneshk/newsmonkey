import React from 'react'
import Walk from './Walk.gif'
export default function Spinner() {
  return (
    <div className='text-center my-4'>
      <img src={Walk} alt="Loading" />
    </div>
  )
}
