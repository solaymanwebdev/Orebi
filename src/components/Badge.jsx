import React from 'react'

const Badge = ({Badge, className}) => {
  return (
    <div className={`bg-black py-2.5 px-7.5 text-white font-bold font-dm ${className}`}>{Badge}</div>
  )
}

export default Badge