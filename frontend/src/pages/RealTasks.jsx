import React from 'react'
import RealTaskComponent from '../components/RealTasks/RealTaskComponent'
import { LocationEditIcon } from 'lucide-react'

const RealTasks = () => {
  return (
    <div className='py-8'>
        <div className='px-8 py-6 bg-gray-50 rounded-3xl'>
                <div className="flex items-center gap-2 px-4">
                        <span><LocationEditIcon size={40} className="text-green-600 pb-2"/></span>
                        <h1 className='text-4xl font-bold mb-2'>Real World Environmental Tasks</h1>
                </div>
                <p className='px-4'>Take action in your community! Complete real environmental tasks, document your impact and earn eco-points for making a difference</p>
        </div>
        <div className='px-4'>
                <RealTaskComponent/>
        </div>
    </div>
  )
}

export default RealTasks