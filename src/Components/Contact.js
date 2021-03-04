import emailjs, { send } from 'emailjs-com'
import APIkeys from '../AppData/APIkeys'

function Contact(){

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('gmail', APIkeys.TEMPLATE_ID, e.target, APIkeys.USER_ID)
        .then(response => {
            alert('Message Sent, I\'ll get back to you shortly.', response.text)
        }, error => {
            alert('An error occurred, please try again.', error.text)
        } )
        }
    return(
        <div className="contact-form">
            <h1>Contact</h1>
            <p>Have a question or want to work together?</p>
            <form onSubmit={sendEmail}>
                <input placeholder="Name" name="name" /><br/>
                <input placeholder="Email" name="email" /><br/>
                <input placeholder="Your Message" name="message" /><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;