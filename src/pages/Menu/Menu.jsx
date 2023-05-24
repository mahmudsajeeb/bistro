import React from 'react'
import Cover from '../../shared/Cover'

import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from '../../hook/useMenu'
import SectionTitle from '../../component/SectionTitle'
import MenuCategory from './MenuCategory/MenuCategory'
import MenuItem from '../PopularMenu/MenuItem'
function Menu() {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const soup = menu.filter(item => item.category === "soup")
  const salad = menu.filter(item => item.category === "salad")
  const offered = menu.filter(item => item.category === "offered")
  console.log(salad)
  return (
    <div>
    
    <Cover img={menuImg} title="Our Menu" />
    <SectionTitle subHeading={"Don't Miss"} heading={"TODAY's OFFERED"}></SectionTitle>
    <div className='max-w-screen-xl mx-auto mb-9'>
    <MenuCategory items={offered}></MenuCategory>
    </div>
    
    </div>
  )
}

export default Menu