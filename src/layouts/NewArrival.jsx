import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Product from '../components/Product'
import rabbit from '../assets/product/rabbit.png'
import basket from '../assets/product/basket.png'
import digittalWatch from '../assets/product/digittalWatch.png'
import speekerWatch from '../assets/product/speekerWatch.png'


const NewArrival = () => {
  return (
    <div>\
        <Container>
            <Flex className={'gap-10'}>
                <div className="w-1/4">
                <Product productImg={rabbit} productName={"New"}/>
                </div>
                <div className="w-1/4">
                <Product productImg={basket} productName={"Hot"}/>
                </div>
                <div className="w-1/4">
                <Product productImg={digittalWatch} productName={"Top"}/>
                </div>
                <div className="w-1/4">
                <Product productImg={speekerWatch} productName={"New"}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default NewArrival