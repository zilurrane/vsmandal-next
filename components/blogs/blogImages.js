import React from 'react'
import blog1 from '../../public/images/blog/img-1.jpg'
import blog2 from '../../public/images/blog/img-2.jpg'
import blog3 from '../../public/images/blog/img-3.jpg'
import Link from 'next/link'
import Image from 'next/image'

const BlogImages = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-blog-area p-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>Blogs</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Blog Header</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Read Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Blog Header</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Read Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Blog Header</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Read Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogImages;