function Contact(){
    return(
        <div>
            <h1>Contact</h1>
            <p>Have a question or want to work together?</p>
            <form>
                <input placeholder="Name" name="name" />
                <input placeholder="Email" name="email" />
                <input placeholder="Your Message" name="message" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;