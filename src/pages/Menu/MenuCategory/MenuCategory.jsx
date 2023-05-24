 
import MenuItem from '../../PopularMenu/MenuItem'
 
const MenuCategory = ({items}) =>{
  // console.log(salad)
  return(
    <div className='grid grid-cols-2 gap-4'>
    {
      items.map(menuItems => <MenuItem key={menuItems._id} menuItems={menuItems}></MenuItem>)
       

      
    }
     
  </div>
  )
}

export default MenuCategory