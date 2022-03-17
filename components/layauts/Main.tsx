import React from 'react'
import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui/Navbar';
interface Props {

}
export const MainPage:FC = ({children}) => {
  return (
    <>
     <Head>
        <title>Saving with love</title>
        <meta name="description" content="saving the world" />
        <link rel="icon" href="images/icon.ico" />
      </Head>
      <Navbar />
    <main>
        {children}
    </main>
</>
  )
}

export default MainPage