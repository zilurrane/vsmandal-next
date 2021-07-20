import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import abimg from '../../public/images/about3.png'
import VideoModal from '../ModalVideo'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>What We Do?</span>
                                <h2>We Are In A Mission To Help The Helpless</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there.</p>
                            <p>Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </p>
                            <div className="btns">
                                <Link href="/donate">
                                    <a href="/donate" className="theme-btn" onClick={ClickHandler}>Donate Now</a>
                                </Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <Image src={abimg} layout="responsive" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;