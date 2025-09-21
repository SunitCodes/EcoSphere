import React from 'react'
import ProfileHeader from '../components/ProfileComponent/ProfileHeader'
import Achievements from '../components/ProfileComponent/Achievements'
import ProfileFooter from '../components/ProfileComponent/ProfileFooter'

const Profile = () => {
  return (
    <div>
        <ProfileHeader/>
        <Achievements/>
        <ProfileFooter/>
    </div>
  )
}

export default Profile