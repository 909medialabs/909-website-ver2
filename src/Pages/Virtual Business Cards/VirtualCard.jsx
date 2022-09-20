import './VirtualCard.css'
import Members from './members-info.json'
import {useLocation} from 'react-router-dom'

function VirtualCard() {

    const path = useLocation().pathname; //Gets the url
    const userID = Members.findIndex((item) => {return item.id === path}); //Returns the JSON index from id compared to the URL path

    if(userID ===-1){
        return(
        <div style={{background:"#ff0066", display:"flex", alignItems:"center", width:"100%", height:"100vh", justifyContent:"center", textAlign:"center"}}>
            <h2>Sorry, we couldn't find the card you're looking for... 🙍‍♀️</h2>
        </div>
        )
    } else {
        return (
        <>
            <Card
            name={Members[userID].name}
            country={Members[userID].country}
            picture={Members[userID].picture}
            role={Members[userID].role}
            bio={Members[userID].bio}/>
        </>
        )
    }

    
}

function Card ({name, country, picture, role, bio, ...props}){
    return(
    <div className='card-page'>
        <div className='v-card-container'>
        
        <div className='v-card-body'>
            <div className='v-card-header'>
                <h2 className='v-name'>{name}</h2>
                <img src={country} alt="" className='flag-icon'/>
            </div>
            <img src={picture} alt="" className='v-profile-picture'/>
            <div className='v-text-content'>
                <h6 className='v-role-label'>Role tag</h6>
                <h5 className='v-role'>{role}</h5>
                <p className='v-bio'>{bio}</p>
                <div className='v-socials'>
                    <a target="_blank" href="https://www.linkedin.com/company/909medialabs/">LinkedIn ↗</a>
                    <a target="_blank" href="https://www.behance.net/909medialabs">Behance ↗</a>
                    <a target="_blank" href="http://909medialabs.com/">Website ↗</a>
                </div>
            </div>
        </div>
        <div className='v-card-footer'>
            <img src='assets/909-logo-white.png' alt="" />
            <p>Copyright © 2022, 909 Media Labs, Inc. All rights reserved.</p>
        </div>
    </div>
    </div>
    )
}

function CardNotFoud ({...props}){
    return(
        <>
        <h2>Sorry, we couldn't find the card you're looking for... 🙍‍♀️</h2>
        </>
    )
}

export default VirtualCard;