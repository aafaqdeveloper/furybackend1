import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const BtnSlider = ({direction, moveSlide}) => {
  return (
    <button onClick={moveSlide} className={`hover:bg-gray-200 ease-in duration-200 ${direction === "next" ? "btn-slide next" : "btn-slide prev "}`}>
      {direction === "next" ? <FaArrowRight /> : <FaArrowLeft />} 
    </button>
  )
}

export default BtnSlider
