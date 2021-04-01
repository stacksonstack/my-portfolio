import emailjs from 'emailjs-com'
import Email from '../AppData/Email'
import Icons from './Icons'

function Contact(){

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('gmail', Email.TEMPLATE_ID, e.target, Email.USER_ID)
        .then(response => {
            alert('Message Sent, I\'ll get back to you shortly.', response.text)
        }, error => {
            alert('An error occurred, please try again.', error.text)
        } )
        }
    return(
        <div className="contact-form">
            <h1 className="title-text" >Contact</h1>
            
            <p>Have a question or want to work together?</p>
            <form onSubmit={sendEmail}>
                <input placeholder="Name" name="name" /><br/>
                <input placeholder="Email" name="email" /><br/>
                <textarea placeholder="Your Message" name="message" /><br/>
                <button type="submit" id="contact-btn">Send Email</button>
            </form>
            <div id="contact-icons" > <Icons/></div> 
        </div>
    )
}

export default Contact;