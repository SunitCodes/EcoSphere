import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { LearningProgress } from '../components/DashboardComponent/LearningProgress'
import { EnvironmentalImpact } from '../components/DashboardComponent/EnvironmentalImpact'
import DashboardFooter from '../components/DashboardComponent/DashboardFooter'
import Leaderboard from '../components/DashboardComponent/Leaderboard'
import DashboardHeader from '../components/DashboardComponent/DasboardHeader'

const Dashboard = () => {
  return (
    <div className="p-8 mt-8 rounded-2xl bg-gray-50 min-h-screen">
      <div>
        <DashboardHeader/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LearningProgress />
        <EnvironmentalImpact />
      </div>
      <div>
        <Leaderboard/>
      </div>
      <div>
        <DashboardFooter/>
      </div>
    </div>
  )
}

export default Dashboard