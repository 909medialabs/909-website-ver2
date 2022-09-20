import './AboutUs.css'
import picMaryely from './Assets/pic-maryely.png'
import picAron from './Assets/pic-aron.png'
import picBevin from './Assets/pic-bevin.png'
import picCrispin from './Assets/pic-crispin.png'
import picJohn from './Assets/pic-john.png'
import picLara from './Assets/pic-lara.png'
import picLTMP from './Assets/pic-ltmp.png'
import picMario from './Assets/pic-mario.png'
import picMauricio from './Assets/pic-mauricio.png'
import picMiguel from './Assets/pic-miguel.png'
import picVanesa from './Assets/pic-vanesa.png'
import arrowIcon from './Assets/Down-Arrow.png'
import { useState } from 'react'

const AboutUs = props => {
	return (
		<>
        <div className="top-spacer"></div>
        <div className='about-us'>
            <h2>our team</h2>
            <div className='profile-cards-container'>
                <ProfileCard src={picMaryely} name='Maryely H. Lira' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picMario} name='Mario Monroy S.' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picLara} name='Paulina Lara' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picMiguel} name='Miguel Rodríguez' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picMauricio} name='Mauricio Higuera' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picJohn} name='John Cameron' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picVanesa} name='Vanesa Román' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picBevin} name='Bevin Mick' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
            </div>
            <div className='top-spacer'></div>
            <h2>investors board</h2>
            <div className='profile-cards-container'>
                <ProfileCard src={picCrispin} name='Crispin Taylor' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picAron} name='Aron Moskewicz' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
                <ProfileCard src={picLTMP} name='LTMP' position='Founder & Art Director' bio='Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company.'/>
            </div>
        </div> 
		</>
	);
}

function ProfileCard ({src, name, position, bio, ...props}) {
    const [content, setContent] = useState(false);
    const [arrow, setArrow] = useState(false); 

	const showContent = () => {
		if(content === undefined) {
			return;
		}

		return content ? 'display' : ''
		
	}

    const rotateArrow = () => {
		if(arrow === undefined) {
			return;
		}

		return arrow ? 'rotated' : ''
		
	}

    const openCard = () => {setContent(!content); setArrow(!arrow)}

    return(
        <div className={`profile-card ${showContent()}`}>
            <div className='profile-picture'>
                <img src={src} onClick={openCard}/>
                <img src={arrowIcon} className={`arrow ${rotateArrow()}`}/>
            </div>
            <div className={`card-content ${showContent()}`}>
                <h3>{name}</h3>
                <h4>{position}</h4>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default AboutUs;