import React from 'react'
import FormComponent from '../components/HomeComponets/FormComponent'

export default function about() {
  return (
    <div className='root grid place-content-center'>
        <div className='mt-10 '>
            <p className='text-red-400 text-2xl underline'>Lets Talk</p>
            <p className='text-gray-400 text-5xl'>Send me a message!</p>
        </div>
    <div className='p-10'><FormComponent/></div>
    </div>
   
  )
}
