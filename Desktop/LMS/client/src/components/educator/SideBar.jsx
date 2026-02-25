import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const SideBar = () => {
  const { isEducator } = useContext(AppContext)

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Students Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon },
  ]

  // Only show sidebar if user is an educator
  if (!isEducator) return null

  return (
    <div className='md:w-64 w-16 border-r min-h-screen border-gray-500 py-2 flex flex-col text-base bg-white'>
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path === '/educator'}
          className={({ isActive }) =>
            `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 transition-all ${
              isActive
                ? 'bg-gray-100 border-r-4 border-gray-700 font-semibold'
                : 'hover:bg-gray-100/80'
            }`
          }
        >
          <img src={item.icon} alt={item.name} className='w-6 h-6' />
          <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default SideBar
