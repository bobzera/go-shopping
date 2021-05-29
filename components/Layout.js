import Head from 'next/head'
import { useState } from 'react'
import Nav from '../components/nav'
import Sidemenu from '../components/side-menu'

export default function Layout({children}){
    const [sideMenu, setSideMenu] = useState(false);

    const show = (show) =>{
        if(sideMenu == show){
        setSideMenu(false)
        }
        setSideMenu(show)
    }
    return(<>
    <Head>
      <title>Go Shopping</title>
    </Head>
    {sideMenu && <Sidemenu show={show}/>} 
    {!sideMenu && <Nav show={show}/>}

    {!sideMenu && children }
    
    
</>)
}