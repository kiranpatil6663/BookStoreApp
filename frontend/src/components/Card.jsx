import React from 'react'



function Card({item}) {
 
  return (<>
    <div className="my-3 p-3">
    <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img className="h-25 w-full"
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline border-1 px-2 py-2 cursor-pointer hover:bg-pink-800 text-white font-semibold   hover:scale-110 duration-300">Buy Now</div>
    </div>
  </div>
</div>
      
    </div>
    </>
  )
}

export default Card
