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
        <div className="text-center mt-20">
        <h1 className="text-semibold text-3xl font-medium mb-5">Contact Us</h1>
        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        >
        <div>
            <input className= 'rounded py-2 px-3 shadow-md mb-4' type="text" placeholder="Name" name="name" required />
        </div>
        <div>
            <input className= 'rounded py-2 px-3 shadow-md mb-4' type="email" placeholder="Email" name="email" required />
        </div>
        <div>
            <textarea className= 'rounded py-2 px-6 shadow-md mb-4' placeholder="Message..." name="message" required />
        </div>
        <div>
            <button className= 'bg-white rounded py-2 px-3 shadow-md mb-4' type="submit">Submit</button>
        </div>
        <div>
            <br></br>
        <p>Click <Link to="/Homepage" className= 'underline'>here</Link> to return home.</p>
        </div>
        </form>
        </div>
    );
    };

export default ContactForm;