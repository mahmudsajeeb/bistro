import React from 'react'

function FoodCard({item}) {
  const {name,price,image,recipe} = item
  console.log(image)
  return (
    <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className=" h-[200px]" />
  </figure>
  <p className='bg-slate-900 text-white absolute px-4 right-0 m-14'>${price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
// {/* <div className="card w-full bg-base-100 gap-12 shadow-xl">
//   <figure><img className='w-[600px] h-[250px]' src={image} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div> */}
  )
}

export default FoodCard