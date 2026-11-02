import React from 'react'
import Image from './Image'
import Badge from './Badge'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
//import { FaShoppingCart } from "react-icons/fa";




const Product = ({ productImg, productName, productBadge, productPrice }) => {
  return (
    <div className='relative group overflow-hidden'>
      <Image imgSrc={productImg} />
      <Badge className='absolute top-3 left-3' Badge={productBadge} />
      <div className="flex justify-between pt-5">
        <h3>{productName}</h3>
        <h4>{productPrice}</h4>
      </div>
      <div className=" bg-white w-full p-5 absolute bottom-10 left-0 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
        <div className="flex items-center justify-end gap-x-3">
          Add to Wish List <FaHeart />
        </div>
        <div className="flex items-center justify-end gap-x-3">
          Compare <FiRefreshCcw/>
        </div> 
        <div className="flex items-center justify-end gap-x-3">
          Add to Cart <FaShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default Product