import React from 'react'
import pr1 from '../../public/images/event/img-1.jpg'
import pr2 from '../../public/images/event/img-2.jpg'
import pr3 from '../../public/images/event/img-3.jpg'
import Link from 'next/link'
import Image from 'next/image'

const EventSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className="wpo-event-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Events</span>
                            <h2>Upcoming Events</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <Image src={pr1} alt=""/>
                                <div className="thumb-text">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Education for All Children</h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link onClick={ClickHandler} href="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <Image src={pr2} alt=""/>
                                <div className="thumb-text-2">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Food for All Everyone</h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link onClick={ClickHandler} href="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <Image src={pr3} alt=""/>
                                <div className="thumb-text-3">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Free Treatment </h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Newyork City</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <Link onClick={ClickHandler} href="/event-details">Learn More...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection;