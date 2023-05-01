import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';


const FORM_ENDPOINT = "https://public.herotofu.com/v1/bef73fd0-e000-11ed-bc58-ed7c0e861dff"; 

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
        <>
        <div className="contact" >
        <BiCheckCircle  style={{ fontSize: '100px' }}/>
            <h1>Thank You!</h1>
            <h2>Your Message Was Successfully Submitted</h2>
            <h3>We'll be in touch soon.</h3>
            <p>Click <Link to="/Homepage">here</Link> to return home.</p>
            </div>
        </>
        );
    }
    

    return (
        <div className="input">
        <h1>Contact Us</h1>
        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >
        <div>
            <input type="text" placeholder="Name" name="name" required />
        </div>
        <div>
            <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
            <textarea placeholder="Message..." name="message" required />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        <div>
            <br></br>
        <p>Click <Link to="/Homepage">here</Link> to return home.</p>
        </div>
        </form>
        </div>
    );
    };

export default ContactForm;