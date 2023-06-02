import React,{ useRef } from 'react';
import './ContactStyle.css';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cm4wj1p', 'template_dosar9v', form.current, 'FIhrh86vLvzBmBDnI')
    e.target.reset()
  };

  return (
    <section>
        <h2>Contact Me</h2>
        <div className='contact-container'>
            <div className='contact-options'>
                <article className='contact-option'>
                    <MdOutlineEmail className='contact-option-icon' />
                    <h4>Email</h4>
                    <a href='mailto:davidnavidali@gmail.com' target='_blank' rel='noreferrer'>Send a Message</a>
                </article>
                <article className='contact-option'>
                    <RiMessengerLine className='contact-option-icon' />
                    <h4>Messenger</h4>
                    <a href='https://www.facebook.com/profile.php?id=100062809791733&mibextid=ZbWKwL' target='_blank' rel='noreferrer'>Send a Message</a>
                </article>
                <article className='contact-option'>
                    <AiOutlineWhatsApp className='contact-option-icon' />
                    <h4>Whatsapp</h4>
                    <a href='https://api.whatsapp.com/send?phone=+254791083661' target='_blank' rel='noreferrer'>Send a Message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Your Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' rows='7' placeholder='Your Message' required />
                <button type='button' className='btn btn-light'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default ContactMe