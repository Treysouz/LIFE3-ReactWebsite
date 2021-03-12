import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='contactUsForm' id='contactUs'>
                    <form action='https://formspree.io/xzbeebbo' method='POST'>
                        <div className='formContainer'>
                            <h2>Contact Us</h2>
                            <h1>Send Us a Message</h1>
                            <br />
                            <div className='formInput'>
                                <input
                                    className='input2'
                                    type='text'
                                    name='companyName'
                                    placeholder='Your Organization Name'
                                />
                                <select
                                    className='input2'
                                    id='mylist'
                                    name='organizationType'
                                    placeholder='Company Type'>
                                    <option value='technicalCompany'>
                                        Technical company
                                    </option>
                                    <option value='educationalInstitution'>
                                        Educational institution
                                    </option>
                                    <option value='others'>Other</option>
                                </select>
                            </div>
                            <div className='formInput'>
                                <input
                                    className='input2'
                                    type='text'
                                    name='name'
                                    placeholder='Your Name'
                                />
                                <input
                                    className='input2'
                                    type='tel'
                                    name='phoneNumber'
                                    placeholder='Phone#'
                                />
                            </div>
                            <div className='formInput'>
                                <input
                                    className='input2'
                                    type='email'
                                    name='emailAddress'
                                    placeholder='Email'
                                />
                            </div>
                            <div className='messageInput'>
                                <textarea
                                    type='text'
                                    name='message'
                                    placeholder='Message'
                                    defaultValue={''}
                                />
                            </div>
                            <div className='submitContainer'>
                                <input
                                    className='submitBtn'
                                    type='submit'
                                    onClick={() =>
                                        this.props.clickHandler(
                                            'Button',
                                            'Contact Us Message Sent'
                                        )
                                    }
                                    value='Send Message'
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/* <img class="footerLogo" src="Assets/Images/Icons/LIFE3FooterLogo.png" alt="LIFE3 Logo" title="LIFE3"> */}
                {/* <div class="contactUsContainer">
          <h3>CONTACT US</h3>
          <p>215 Moore St, <br> Brooklyn, NY 11206 <br> USA</p>
      </div> */}
                <div className='socialMediaContainer'>
                    <p>EMAIL US | CALL US (917) 570-2669</p>
                    <div className='iconBar'>
                        <a
                            href='https://www.linkedin.com/company/life3-learn-innovate-for-innovation-enablement-empowerment/?viewAsMember=true'
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={() =>
                                this.props.clickHandler(
                                    'Button',
                                    'LinkedIn Link'
                                )
                            }>
                            <div className='socialMediaIcon'>
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}></FontAwesomeIcon>
                            </div>
                        </a>
                        <a
                            href='https://www.facebook.com/life3innovate/?modal=admin_todo_tour'
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={() =>
                                this.props.clickHandler(
                                    'Button',
                                    'Facebook Link'
                                )
                            }>
                            <div className='socialMediaIcon'>
                                <FontAwesomeIcon
                                    icon={faFacebookF}></FontAwesomeIcon>
                            </div>
                        </a>
                        <a
                            href='mailto:info@life3.io'
                            onClick={() =>
                                this.props.clickHandler('Button', 'Email Link')
                            }>
                            <div className='socialMediaIcon'>
                                <FontAwesomeIcon
                                    icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                        </a>
                    </div>
                    <p className='copyright'>2021 LIFE3 All rights reserved.</p>
                    <p></p>
                </div>
            </footer>
        );
    }
}
