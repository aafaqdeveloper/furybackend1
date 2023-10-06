import React from 'react'

const InfoBox = ({title, count, icon, color}) => {
  return (
    <div className={`rounded mb-5 px-5 py-1 ${color}`}>
      <span>{icon}</span>
      <span>
        <p className='text-xl'>{title}</p>
        <h4>{count}</h4>
      </span>
    </div>
  )
}

export default InfoBox
