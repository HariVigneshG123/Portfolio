import React, {useRef} from 'react'

export default function SocialAndContact() {

    const formRef = useRef(null);

    const handleClear = (e) => {
        e.preventDefault(); // Prevents the form submission
        formRef.current.reset(); // Resets the form fields
    };

  return (
    <div>
        <h2>Contact</h2>
        <form ref={formRef}>
            <input type="input" placeholder="Enter full name"/>
            <input type="input" placeholder="Phone Number (Optional)"/>
            <input type="input" placeholder="Email"/>
            <input type="input" placeholder="Describe (Reason to Contact)"/>
            <button onClick = {() => alert('Thank you for reaching out. Your Details have been mailed to the author. Please expect a response soon')}>Send</button>
            <button onClick={handleClear}>Clear</button>
        </form>
        <h2>Social</h2>
        <p>harivigneshguru@gmail.com</p>
        <p>https://www.linkedin.com/in/harivignesh-gomathi-sankara-guru-512756169/</p>
    </div>
  )
}
