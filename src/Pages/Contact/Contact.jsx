import './Contact.css'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import iconLI from './assets/icon-LI.svg'
import iconBE from './assets/icon-BE.svg'
import iconIG from './assets/icon-IG-2.svg'


function Contact (){
    return(
      <div className='contact-page'>
        <div className='contact-container'>
            {/* <div className='contact-box contact-us'>
                <h3>Contact us!</h3>

                <MyForm/>
            </div> */}
            <div className='contact-box details'>
                <h3>Details</h3>
                <br />
                <a href="mailto:info@909medialabs.com">info@909medialabs.com</a><br />
                <a href="tel:+55 5555 5555">+55 5555 5555</a><br /><br />
                <p>Nevis, Incorporated to <br /> the British Islands.</p>
                <div className='contact-socials'>
                  <a href=""><img src={iconLI}/></a>
                  <a href=""><img src={iconBE}/></a>
                  <a href=""><img src={iconIG}/></a>
                </div>

            </div>
        </div>
      </div>
    )
}

export default Contact;

function MyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    return (
      <form>
        <label>
          <input
            type="text" 
            value={name}
            placeholder="NAME"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text" 
            value={email}
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <textarea
            type="textarea" 
            value={message}
            rows={5}
            placeholder="MESSAGE"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </form>
    )
  }