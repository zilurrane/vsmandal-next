import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import SidebarWrap from '../SidebarWrap'
import simg from '../../public/images/event-details2.jpg'




import './style.css'

const EventSingle = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

        return (
            <div className="wpo-event-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-event-item">
                                <div className="wpo-event-img">
                                    <img src={simg} alt=""/>
                                    <div className="thumb-text">
                                        <span>25</span>
                                        <span>NOV</span>
                                    </div>
                                </div>
                                <div className="wpo-event-details-text">
                                    <h2>Education for All Children</h2>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                </div>
                                <div className="wpo-event-details-wrap">
                                    <div className="wpo-event-details-tab">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '1' })}
                                                    onClick={() => { toggle('1'); }}
                                                >
                                                    Event Schedule
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '2' })}
                                                    onClick={() => { toggle('2'); }}
                                                >
                                                Map Location
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '3' })}
                                                        onClick={() => { toggle('3'); }}
                                                    >
                                                    Contact Us
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <div className="wpo-event-details-content">
                                        <TabContent activeTab={activeTab}>
                                            <TabPane tabId="1" id="Schedule">
                                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                                                <ul>
                                                    <li>The wise man therefore in these matters.</li>
                                                    <li>In a free hour, when our power of choice and when nothing.</li>
                                                    <li>Else he pains to avoid pains.</li>
                                                    <li>We denounce with righteous indignation dislike men. </li>
                                                    <li>Which is the same as saying through.</li>
                                                    <li>The wise man therefore always holds in these matters.</li>
                                                    <li>Power of choice and when nothing.</li>
                                                    <li>Pains to avoid worse pains.</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <div className="contact-map enent-map">
                                                    <iframe title="Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowFullScreen></iframe>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <div className="event-contact">
                                                    <div className="wpo-donations-details">
                                                        <form onSubmit={SubmitHandler} id="contact-form">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name*"/>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group clearfix">
                                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
                                                                </div>
                                                                <div className="col-lg-12 col-12 form-group">
                                                                    <textarea className="form-control" name="note" id="note" placeholder="Massage"></textarea>
                                                                </div>
                                                                <div className="submit-area col-lg-12 col-12">
                                                                    <button type="submit" className="theme-btn submit-btn">Submit Now</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SidebarWrap/>

                    </div>
                </div>
            </div>

            );
    }
    
    export default EventSingle;
          
          
          
          
