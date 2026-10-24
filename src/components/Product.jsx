import React from 'react'
import Image from './Image'
import Badge from './Badge'



const Product = ({productImg, productName,productBadge,productPrice }) => {
  return (
    <div className='relative'>
        <Image imgSrc={productImg}/>
        <Badge className='absolute top-3 left-3' Badge={productBadge}/>
        <h3>{productName}</h3>
        <h4>{productPrice}</h4>
    </div>
  )
}

export default Product