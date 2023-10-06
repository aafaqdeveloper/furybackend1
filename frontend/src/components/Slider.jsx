import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import { Link } from 'react-router-dom'
const Slider = ({dataSlider, buttonData}) => {
    // console.log(dataSlider.length)
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index)=> {
        return (
            <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                <img className='' src={obj.link} />
            </div>
        )
      })}
      
      
      <BtnSlider moveSlide={nextSlide} direction={"next"} /> 
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className='slider_bottom_links absolute bottom-20 flex'>
        {buttonData.map((item, index) => {
            return <Link to={item.link} key={index}><button className='bg-white mx-2 px-5 py-2 text-xl capitalize shadow-xl rounded bottom-20'>{item.name}</button></Link>
        
        })}
        
      </div>

      <div className='container-dots'>
        {Array.from({length: dataSlider.length}).map((item, index) => (
            <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>

    </div>
  )
}

export default Slider
