import React from 'react'
import RealTaskComponent from '../components/RealTasks/RealTaskComponent'
import { LocationEditIcon } from 'lucide-react'

const RealTasks = () => {
  return (
    <div className='p-8'>
        <div className='p-6'>
                <div className="flex items-center gap-2 px-4">
                        <span><LocationEditIcon size={30} className="text-green-600"/></span>
                        <h1 className='text-3xl font-bold mb-2'>Real World Environmental Tasks</h1>
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