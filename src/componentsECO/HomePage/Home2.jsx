import React from 'react'
import { Navbars } from '../NavBar/Navbars'
import { Products } from '../ProductsList/Products'
import './HomePage.scss'


export const Home2 = () => {
  return (
    <>
       <div className='container-fluied background'>
       <Navbars/>
       <Products/> 
       </div>
    </>
  )
}
