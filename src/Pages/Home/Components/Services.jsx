import './Services.css'
import iconCollectibles from '../assets/services-icons/Collectibles-Production.png'
import iconBrandDesign from '../assets/services-icons/Brand-Design.png'
import icon3DAnimation from '../assets/services-icons/3D-Animation.png'
import iconVirtualBusinessCard from '../assets/services-icons/Virtual-Business-Card.png'
import iconMotionGraphics from '../assets/services-icons/Motion-Graphics.png'
import iconcopyEditing from '../assets/services-icons/Copy-Editing.png'
import iconAudioVideoEditing from '../assets/services-icons/Audio-And-Video-Editing.png'
import iconMusicProduction from '../assets/services-icons/Music-Production.png'
import iconSoundDesign from '../assets/services-icons/Sound-Design.png'
import iconLogisticsEvent from '../assets/services-icons/Logistics-Event-Production.png'

const Services = props => {
   return(
    <>
    <div className='fade'/>
    <div className='services'>
        <div></div>
        <Service src={iconCollectibles} topText={'collectibles'} bottomText={'production (nft)'}/>
        <Service src={iconBrandDesign} topText={'brand'} bottomText={'design'}/>
        <Service src={icon3DAnimation} topText={'3d animation'} bottomText={'and design'}/>
        <Service src={iconVirtualBusinessCard} topText={'virtual'} bottomText={'business cards'}/>
        <Service src={iconMotionGraphics} topText={'motion'} bottomText={'graphics'}/>
        <Service src={iconcopyEditing} topText={'copy'} bottomText={'editing'}/>               
        <Service src={iconAudioVideoEditing} topText={'audio and'} bottomText={'video editing'}/>
        <Service src={iconMusicProduction} topText={'music'} bottomText={'production'}/>
        <Service src={iconSoundDesign} topText={'sound'} bottomText={'design'}/>
        <Service src={iconLogisticsEvent} topText={'logistics and'} bottomText={'event production'}/>

        <div></div>
    </div>
    </>
   );
}


function Service({src, topText, bottomText, ...props}){
	return(
        <div className='service'>
		    <img src={src}/>
            <h2>{topText}</h2>
            <h3>{bottomText}</h3>
        </div>
        
	)
}

export default Services;