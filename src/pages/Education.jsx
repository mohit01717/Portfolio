import React, { useContext } from 'react'
import Line from '../components/Line'
import { MyContext } from '../MyContext'

const Education = () => {
  const {education} = useContext(MyContext);
  return (
    <div ref={education} className=' bg-gray-600 p-10' id='education'>
    <h1 className='xl:text-6xl text-4xl uppercase text-center mb-10 text-white'>Education</h1>
    <Line/>
    </div>
  )
}

export default Education