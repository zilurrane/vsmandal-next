
import React from 'react'

import TeamSection from '../team'
import './style.css'

import vimg from '../../public/images/volunteer.jpg'

const Volunteer = () =>  {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
    <div className="volunteer-area">
        <div className="volunteer-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="volunteer-item">
                            <div className="volunteer-img-wrap">
                                <div className="volunter-img">
                                    <img src={vimg} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer-contact">
                            <div className="volunteer-contact-form">
                                <h2>Become a Volunteer</h2>
                                <form onSubmit={SubmitHandler} className="contact-validation-active" id="contact-form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="First Name"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
                                            <label htmlFor="file">Upload Your CV</label>
                                            <input id="file" type="file" className="form-control" name="file"/>
                                            <i className="ti-cloud-up"></i>
                                        </div>
                                        <div className="col-lg-12 col-12 form-group">
                                            <textarea className="form-control" name="note" id="note" placeholder="Case Description..."></textarea>
                                        </div>
                                        <div className="submit-area col-lg-12 col-12">
                                            <button type="submit" className="theme-btn submit-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TeamSection/>
    </div>
    )
    
}
   

    
    export default Volunteer;
          
          
          
          
