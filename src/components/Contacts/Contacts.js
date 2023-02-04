import React, { useState } from 'react';
import styles from './Contacts.module.css'
import { CgWebsite } from 'react-icons/cg'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import ContactSnackBar from './ContactSnackBar';

const Contacts = () => {
    const { contact_container, social_contact, form_container, contact_icon } = styles
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('')
    const [snackBarSeverity, setSnackBarSeverity] = useState('')
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const info = {
            name, email, message, subject: 'quiz_application'
        }
        if ((name || email || message) === '') {
            alert('Please fill all field')
        }
        else {
            const sendEmail = await emailjs.send(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, info, process.env.REACT_APP_PUBLICID)
            if (sendEmail.status === 200) {
                setOpenSnackbar(true)
                setSnackBarMessage('We received your message')
                setSnackBarSeverity('success')
            }
            else {
                setOpenSnackbar(true)
                setSnackBarMessage('There was an error, please try again later');
                setSnackBarSeverity('error')
            }
        }
    }
    return (
        <div >
            <h1 style={{ textAlign: 'center', margin: '0.5em 0' }}>Contact Me</h1>
            <div className={contact_container}>
                <div className={social_contact}>
                    <a href='https://www.uday-hasan-portfolio.web.app/' target={'_blank'} rel="noreferrer">PORTFOLIO <span className={contact_icon}><CgWebsite /></span> </a>
                    <a href='https://www.linkedin.com/in/uday-hasan-d15/' target={'_blank'} rel="noreferrer">LINKEDIN <span className={contact_icon}><FaLinkedin /></span>   </a>
                    <a href='https://github.com/uday-hasan' target={'_blank'} rel="noreferrer">GITHUB <span className={contact_icon}>   <FaGithubSquare /></span></a>
                </div>
                <div className={form_container}>
                    <h1>Let's work together, make success together.</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" required id="" placeholder='Your Name' />
                        <input type="email" required name="email" id="" placeholder='Your Email' />
                        <input type="text" required name="message" id="" placeholder='Your Message' />
                        <button type='submit'>SEND</button>
                    </form>
                </div>
            </div>
            {
                openSnackbar && <ContactSnackBar handleClose={handleCloseSnackbar} open={openSnackbar} message={snackBarMessage} severity={snackBarSeverity} />
            }
        </div>
    );
};

export default Contacts;