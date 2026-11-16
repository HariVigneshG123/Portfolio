import React, {useRef} from 'react'
import './SocialAndContact.css'

export default function SocialAndContact() {

    const formRef = useRef(null);

    const handleClear = (e) => {
        e.preventDefault(); // Prevents the form submission
        formRef.current.reset(); // Resets the form fields
    };

  return (
    <section id="contact" className="ContactFormContainer NavSection">
        <h2>Contact</h2>
        <label> Feel free to reach out to me. Happy to connect for interesting discussions, answer questions you may have and talk sports... </label>
        <label> Please fill out the form and send. Will get back to you ASAP ... Or drop an email to harivigneshguru@gmail.com </label>
        <form ref={formRef} className="ContactForm">
            <input type="input" placeholder="Enter full name"/>
            <input type="input" placeholder="Phone Number (Optional)"/>
            <input type="input" placeholder="Email"/>
            <textarea type="input" placeholder="Describe (Reason to Contact)"/>
            <div className='ContactFormButtonSection'>
                <button className='ContactFormButton' onClick = {() => alert('Thank you for reaching out. Your Details have been mailed to the author. Please expect a response soon')}>Send</button>
                <button className='ContactFormButton' onClick={handleClear}>Clear</button>
            </div>
        </form>
        {/* Shown only on small screens, where the sidebar is hidden (see SocialAndContact.css) */}
        <div className="SocialSection">
            <h2>Social</h2>
            <div className="SocialLinks">
                <a href = "https://www.linkedin.com/in/harivignesh-gomathi-sankara-guru-512756169/" target="_blank" rel="noopener noreferrer">
                    <img className = "SocialIcon" src = {require('../Utility/Database/linkedin.png')} alt = "LinkedIn"/>
                </a>
                <a href = "https://github.com/HariVigneshG123" target="_blank" rel="noopener noreferrer">
                    <img className = "SocialIcon" src = {require('../Utility/Database/github.png')} alt = "GitHub"/>
                </a>
            </div>
        </div>
    </section>
  )
}
