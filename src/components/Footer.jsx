import './Footer.css'
import iconIG from '../assets/socials-icons/icon-IG.png'
import iconFB from '../assets/socials-icons/icon-FB.png'
import iconTT from '../assets/socials-icons/icon-TT.png'

const Footer = props => {
    return(
        <>
        <footer>
            <p>
                909 Media Labs, Inc. <br />
                Nevis, Incorporated to the British Islands. <br />
                Copyright © 2022, 909 Media Labs, Inc. All rights reserved.
            </p>
            <div className="footer-contact">
                <div className='socials'>
                    <a href="https://www.instagram.com/909medialabs/" target="_blank" className='social-icon'><img src={iconIG}/></a>
                    <a href="https://www.facebook.com/909MediaLabs/" target="_blank" className='social-icon'><img src={iconFB}/></a>
                </div>
                <a href="mailto:info@909medialabs.com">info@909medialabs.com</a>
                <a href="tel:+52-1-55-2188-4820">+52 1 55 2188 4820</a>
            </div>
        </footer>
        </>
    )
}

export default Footer;