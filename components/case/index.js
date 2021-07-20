
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import Image from 'next/image'

import cs1 from '../../public/images/case/img-1.png'
import cs2 from '../../public/images/case/img-2.png'
import cs3 from '../../public/images/case/img-3.png'

class CaseSlide extends Component {

    render() {
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            margin: 10,
            loop: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <div className="wpo-case-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span>Our Causes</span>
                                <h2>Popular Causes What You Should Know</h2>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-case-wrap">
                        <div className="wpo-case-slider">
                            <Slider {...settings}>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <Image src={cs1} alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Ensure Education for every poor children</h2>
                                                <div className="progress-section">
                                                    <div className="process">
                                                        <div className="progress">
                                                            <div className="progress-bar">
                                                                <div className="progress-value"><span>65.5</span>%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li><span>Raised:</span> $7,000.00</li>
                                                    <li><span>Goal:</span> $8,000.00</li>
                                                </ul>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/case-single">Get Details</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/donate">Donate Now</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <Image src={cs2} alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Supply drinking water for the people</h2>
                                                <div className="progress-section">
                                                    <div className="process">
                                                        <div className="progress">
                                                            <div className="progress-bar">
                                                                <div className="progress-value"><span>40.5</span>%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li><span>Raised:</span> $7,000.00</li>
                                                    <li><span>Goal:</span> $8,000.00</li>
                                                </ul>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/case-single">Get Details</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/donate">Donate Now</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <Image src={cs3} alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Providing Healthy Food for the children</h2>
                                                <div className="progress-section">
                                                    <div className="process">
                                                        <div className="progress">
                                                            <div className="progress-bar">
                                                                <div className="progress-value"><span>80.5</span>%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li><span>Raised:</span> $7,000.00</li>
                                                    <li><span>Goal:</span> $8,000.00</li>
                                                </ul>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/case-single">Get Details</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/donate">Donate Now</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <Image src={cs1} alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Ensure Education for every poor children</h2>
                                                <div className="progress-section">
                                                    <div className="process">
                                                        <div className="progress">
                                                            <div className="progress-bar">
                                                                <div className="progress-value"><span>65.5</span>%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li><span>Raised:</span> $7,000.00</li>
                                                    <li><span>Goal:</span> $8,000.00</li>
                                                </ul>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/case-single">Get Details</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/donate">Donate Now</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CaseSlide;




