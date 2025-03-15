import React from 'react'
import { Link,Outlet,Routes,Route} from 'react-router-dom'
import ProfileDetails from './ProfileDetails '
import ProfileSettings from './ProfileSettings'
import RegistrationForm from './RegistrationForm'
function Profile () {

  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
      <Link to="details">ProfileDetails</Link>
      <Link to="settings">ProfileSettings</Link>
      <Link to="registeration">Regestration</Link>

      </nav>
    {/* <Outlet /> */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="registeration" element={<RegistrationForm />} />

      </Routes>
    </div>
  )
}
export default Profile 
