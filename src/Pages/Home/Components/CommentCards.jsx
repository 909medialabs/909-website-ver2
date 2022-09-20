import './CommentCards.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import profPic1 from '../assets/customer-pics/paraqueoque.png'
import profPic2 from '../assets/customer-pics/changoleon.png'
import profPic3 from '../assets/customer-pics/lady-wu.png'
import profPic4 from '../assets/customer-pics/mafe-walker.png'

const items = [
    <Card
        src={profPic1}
        name='Señor sentado en la banqueta'
        subname='Someone for there'
        quote={'¿Para qué o qué?'}
        content='Ut eo laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident'
    />,
    <Card
        src={profPic2}
        name='Changoleón'
        subname='VAGO at Coyoacán'
        quote={'The best Webflow Templates'}
        content='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident'
    />,
    <Card
        src={profPic3}
        name='Lady Wu'
        subname='Disuqe Influencer at Ningún lado'
        quote={'¡Ay, muchas cosas!'}
        content='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident'
    />,
    <Card
        src={profPic4}
        name='Mafe Walker'
        subname='Speaks Alien at Colombia'
        quote={'Wonderful work!'}
        content='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident'
    />
];

const CommentCards = props => {
    return(
    <>
    <h4 className='comment-section-title'>What our clients say</h4>
    <AliceCarousel mouseTracking items={items}
      autoPlay
      autoPlayStrategy='none'
      infinite
      disableButtonsControls
      disableDotsControls
    //   autoWidth
      responsive={{
        0: {
            items: 1,
        },
        1250: {
            items: 2
        },
        1900: {
            items: 3
        }
      }}
      autoPlayInterval={3000}/>
    </>
    );
    
}

export default CommentCards;

function Card ({src, quote, content, name, subname, ...props}){
    return(
        <div className='card-container'>
            <div className='card'>
                <div className='quote-content'>
                    <q>{quote}</q>
                    <p>{content}</p>
                </div>
                <div className='profile'>
                    <img src={src} className='customer-picture'/>
                    <div className='profile-data'>
                        <h5>{name}</h5>
                        <p>{subname}</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}