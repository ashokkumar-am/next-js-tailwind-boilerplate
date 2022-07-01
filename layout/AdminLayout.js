import React from 'react'
import AdminHeader from '@/components/Header/adminHeader';
import AdminFooter from '@/components/Footer/AdminFooter';


export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main>{children}</main>
      <AdminFooter />
    </>
  )
}
