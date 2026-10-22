import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Bars from '../assets/icons/Bars'
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';







const Header = () => {
  return (
    <>
      <div className={"border-b border-[#979797] py-10"}>
        <Container>
          <Flex>
            <div className="w-[40%]">
              <Link to={"/"}><Image imgSrc={logo} imgAlt={"logo"} /></Link>
            </div>
            <div className="w-[60%]">
              <ul className={"flex items-center gap-x-10 font-dm text-[14px] text-[#767676]"}>
                <li className={"hover:font-bold hover:text-[#262626]"}><Link to={"/"}>Home</Link></li>
                <li className={"hover:font-bold hover:text-[#262626]"}><Link to={"/shop"}>Shop</Link></li>
                <li className={"hover:font-bold hover:text-[#262626]"}><Link to={"/about"}>About</Link></li>
                <li className={"hover:font-bold hover:text-[#262626]"}><Link to={"/contact"}>Contact</Link></li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-[#F5F5F3] py-4">
        <Container>
          <Flex>
            <div className="flex items-center gap-x-4 w-1/4">
              <Bars /> Shop by Category
            </div>
            <div className="w-1/2 relative">
              <input type="text" className={"p-5 w-full bg-white"} placeholder="Serch Products" />
              <Search className={"absolute right-2 top-1/2 -translate-1/2"} />
            </div>
            <div className="w-1/4 flex items-center justify-end gap-x-5">
              <div className="flex">
                <User />
                <ChevronDown />
              </div>
              <ShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Header