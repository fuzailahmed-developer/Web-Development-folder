import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <br />

      <nav>
        <Link href="/dashboard/profile">
          Profile
        </Link>

        <br />

        <Link href="/dashboard/settings">
          Settings
        </Link>
      </nav>
      <br />

      {children}
    </div>
  )
}

export default DashboardLayout