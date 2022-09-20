import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../assets/carousel/Hero1.png'
import img2 from '../assets/carousel/Hero2.png'
import img3 from '../assets/carousel/Hero3.png'
import './Carousel.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={img1} onDragStart={handleDragStart} role="presentation" className='carousel-image'/>,
  <img src={img2} onDragStart={handleDragStart} role="presentation" className='carousel-image'/>,
  <img src={img3} onDragStart={handleDragStart} role="presentation" className='carousel-image'/>
];

const Carousel = () =>  {
  return (
    <AliceCarousel mouseTracking items={items}
    autoPlay
    autoPlayStrategy='none'
    infinite
    disableButtonsControls
    autoPlayInterval={4000}/>
  );
}

export default Carousel;