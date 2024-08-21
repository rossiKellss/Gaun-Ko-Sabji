import React from 'react'
import AdminNav from './AdminNav'
import AdminHero from './AdminHero'
import AdminSidePanel from './AdminSidePanel'

function Admin() {
  return (
    <div>
      <AdminNav/>
      <AdminSidePanel/>
      <AdminHero/>
      
    </div>
  )
}

export default Admin