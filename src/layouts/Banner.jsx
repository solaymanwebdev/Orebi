import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <Link to='/shop'>
    <div className={"bg-[url(../src/assets/banner.jpg)] py-80 bg-cover bg-center bg-no-repeat"}></div>
    </Link>
    </>
  )
}

export default Banner