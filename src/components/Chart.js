import React from 'react'

const Chart = () => {
  return (
    <div className='flex flex-col  p-[60px]'>
      <div>
        <h1 className='font-bold text-[16px] text-indigo-500'>Retirement Income </h1>
        <h1 className='font-bold text-[20px] '>Starting Year 2056 </h1>
      </div>

      <div className='flex flex-row pt-4'>

      <div className='flex flex-col border-b-2 border-indigo-500 '>
        <h1 className='font-bold text-[28px]'>$300,000</h1>
        <h3 className='font-normal text-[16px] text-gray-400'>My Goal</h3>
      </div>
      <div className='flex flex-col pl-4 pr-6 '>
        <div className='border-b-2 border-indigo-500'>
        <h1 className='font-bold text-[28px]'>$300,000</h1>
        <h3 className='font-normal text-[16px] text-gray-400'>My Goal</h3>
        </div>
      </div>
      <div className='flex flex-col border-b-2 border-indigo-500 pr-6'>
        <h1 className='font-bold text-[28px]'>$300,000</h1>
        <h3 className='font-normal text-[16px] text-gray-400'>My Goal</h3>
      </div>
      
      </div>
    </div>
  )
}

export default Chart