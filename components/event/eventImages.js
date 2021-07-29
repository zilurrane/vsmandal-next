import React from 'react'
import blog1 from '../../public/images/blog/img-1.jpg'
import blog2 from '../../public/images/blog/img-2.jpg'
import blog3 from '../../public/images/blog/img-3.jpg'
import Link from 'next/link'
import Image from 'next/image'

const EventImages = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-blog-area p-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>Event Title</h2>
                            <span>Event Date and Time</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <Image src={blog1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <Image src={blog2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <Image src={blog3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventImages;