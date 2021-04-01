import React from 'react';
import './ContactUs.css'

function ContactUs() {
    return (
        <div class="contact">

            <form  className="ui form">
                    <h3>Contact</h3>
                    <div className="">
                        <input type="text" placeholder="First Name" className="" />
                    </div>
                    <br/>
                    <br/>
                    <div className="">
                        <input type="text" placeholder="Last Name" className="" />
                    </div>
                    <br/>
                    <br/>
                    <div className="">
                        <input type="text" placeholder="Email" className="" />
                    </div>
                    <br/>
                    <br/>
                    <div className="">
                     <textarea rows="4" cols="50" placeholder="Message" name="comment"/> 
                    </div>
                    <button className="formBtn">Send</button>
            </form>
        </div>
    )
}

export default ContactUs;
