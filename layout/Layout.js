import React from 'react'
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}


// import useSWR from 'swr'
// import Navbar from './navbar'
// import Footer from './footer'

// export default function Layout({ children }) {
//   const { data, error } = useSWR('/api/navigation', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <>
//       <Navbar links={data.links} />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }