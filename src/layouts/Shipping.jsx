import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { TbNumber2 } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { RotateCcw } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="py-5 border-b border-[#f0f0f0]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="flex items-center gap-x-4">
                    <TbNumber2 /> <span className={"font-dm text-[#6d6d6d] text-[16px]"}>Two years warranty</span>
                </div>
                <div className="flex items-center gap-x-4">
                    <FaTruck  className={"text-xl"}/> <span className={"font-dm text-[#6d6d6d] text-[16px]"}>Free shipping</span>
                </div>
                <div className="flex items-center gap-x-4">
                    <RotateCcw className={"text-base"}/> <span className={"font-dm text-[#6d6d6d] text-[16px]"}>Return policy in 30 days</span>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Shipping