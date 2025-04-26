import {useState} from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './slider.css';

const Slider = ({imageData}) => {
    const [imgIndex, setImgIndex] = useState(0);

    const prevImg = () =>{
        if (imgIndex === 0) {
            setImgIndex( imageData.length - 1);
        } else {
            setImgIndex((prev)=> prev - 1);
        }
    }

    const nextImg = () =>{
        if(imgIndex === imageData.length - 1){
           return setImgIndex(0);
        } else {
            return setImgIndex((prev)=>prev + 1);
        }
    }
  return (
    <div className='slide'>
      <button className='slide-btn-left' onClick={prevImg}><FaArrowLeft /></button>
      <img className='slide-img' src={imageData[imgIndex]} alt="slideImg" />
      <button className='slide-btn-right' onClick={nextImg}><FaArrowRight /></button>
    </div>
  )
}

export default Slider
