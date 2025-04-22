// Settings.jsx
import React, { useContext } from 'react'
import { FaCog, FaUser, FaLock, FaBell, FaGlobe, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa'
import NavBar from '../Components/NavBar'
import { AuthContext } from '../Components/AuthContext'

const Settings = () => {
  const { logout } = useContext(AuthContext)

  const settingsCategories = [
    {
      icon: <FaUser />,
      title: "Account Settings",
      description: "Personal information, account security",
      options: ["Edit Profile", "Change Password", "Privacy Settings"]
    },
    {
      icon: <FaBell />,
      title: "Notifications",
      description: "Manage your notification preferences",
      options: ["Push Notifications", "Email Notifications", "SMS Notifications"]
    },
    {
      icon: <FaGlobe />,
      title: "Language & Region",
      description: "Change your language and regional settings",
      options: ["Language", "Time Zone", "Date Format"]
    },
    {
      icon: <FaSignOutAlt />,
      title: "Logout",
      description: "Sign out of your account",
      options: ["Logout"]
    },
    // Add more categories...
  ]

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Fixed NavBar at the top */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavBar />
      </div>

      <div className="container mx-auto pt-16 px-4">
        <div className="flex items-center mb-6">
          <FaCog className="text-2xl text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        {/* Settings Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {settingsCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 ">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {category.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {category.options.map((option, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer transition-colors"
                    onClick={category.title === "Logout" ? handleLogout : undefined}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <FaQuestionCircle className="text-xl text-blue-600 mr-2" />
            <h2 className="font-semibold">Need Help?</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Visit our Help Center or contact support for assistance
          </p>
          <button className="mt-3 text-blue-600 hover:underline">
            Visit Help Center
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings