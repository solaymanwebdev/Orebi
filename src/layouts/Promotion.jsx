import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import PromotionOne from '../assets/promotion1.jpg'
import PromotionTwo from '../assets/promotion2.jpg'
import PromotionThree from '../assets/promotion3.jpg'
import { Link } from 'react-router-dom'



const Promotion = () => {
    return (
        <div className={"pt-35 pb-32"}>
            <Container>
                <Flex className="justify-between">
                    <div className="w-[48%] h-187.5">
                        <div className={"w-full h-full"}>
                            <Link to={'/shop'}>
                                <Image className={"w-full h-full"} imgSrc={PromotionOne} imgAlt={"PromotionOne"} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[48%] h-187.5 flex flex-col items-center justify-between">
                        <div className={"w-full h-[47%]"}>
                            <Link to={'/shop'}>
                                <Image className={"w-full h-full"} imgSrc={PromotionTwo} imgAlt={"PromotionTwo"} /></Link>
                        </div>
                        <div className={"w-full h-[47%]"}>
                            <Link to={'/shop'}>
                                <Image className={"w-full h-full"} imgSrc={PromotionThree} imgAlt={"PromotionThree"} />
                            </Link>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Promotion