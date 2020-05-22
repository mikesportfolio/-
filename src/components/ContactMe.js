import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import axios from "axios";


const ContactMe = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: {ok, msg}
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(e.target)
        setServerState({submitting: true});
        axios({
            method: "post",
            url: "https://formspree.io/moqkjrbl",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks you for the message! i will get back to you shortly", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (<>
            <div id="contact">
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="section-title text-center">Contact Me</h2>
                        <hr/>
                    </div>
                    <div className="space"></div>

                    <div className="row">
                        <div className="col-md-3">
                            <address>
                                <strong>Address</strong><br/>
                                <br/>
                                mikesportfolio.github.io<br/>
                                Triq Carmelo, Dimech, Mosta<br/>
                                MST 1281, Malta<br/>
                                Phone: (356) 793-11887
                                <ul className="social">
                                    <li><a href="https://github.com/dakinyade/" target="_blank"><span><FontAwesomeIcon
                                        icon={faGithub} size="2x"/></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/akinyade-michael-2ba17233/"
                                           target="_blank"><span><FontAwesomeIcon
                                        icon={faLinkedinIn} size="2x"/></span></a></li>
                                    <li><a href="#" target="_blank"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="http://mikesportfolio.github.io" target="_blank"><span
                                        className="fa fa-dribbble"></span></a></li>
                                </ul>
                            </address>
                        </div>

                        <div className="col-md-9">

                            <form onSubmit={handleOnSubmit}>
                                <input type="text" id="name" name="name" className="form-control" required
                                       placeholder="Your Name" width="60"/>
                                <input type="text" id="phone" name="phone" className="form-control"
                                       placeholder="Phone No."/>

                                <input placeholder="Email" className="form-control" id="email" type="email" name="email"
                                       required/>
                                <textarea className="form-control" placeholder="Message" rows="4" id="message" required
                                          name="message"></textarea>
                                <button type="submit" className="btn send-btn btnReform"
                                        disabled={serverState.submitting}>
                                    Submit
                                </button>
                                {serverState.status && (
                                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                        {serverState.status.msg}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default ContactMe;