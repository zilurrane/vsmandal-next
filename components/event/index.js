import React, { Component } from "react";
import pr1 from "../../public/images/event/img-1.jpg";
import pr2 from "../../public/images/event/img-2.jpg";
import pr3 from "../../public/images/event/img-3.jpg";
import Link from "next/link";
import Image from "next/image";
import styles from "./Event.module.scss";

class EventSection extends Component {

      ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    async componentDidMount() {
        await fetch('http://127.0.0.1:8000/api/events')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded: true,
                  items: json,
              })
          }).catch(error => console.log('Failed to load the event Card component as the API url is not active!'))
    }

    render(){
      var {isLoaded,items} = this.state;
      if (!isLoaded){
        return  <div className="wpo-event-area p-5">
                        
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wpo-section-title">
                                    <h2>Upcoming Events</h2>
                                    <span>Our Events</span>
                                    <h1>Loading...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
    } else 
      return (
        
                        <div className={`wpo-event-area section-padding ${styles["wpo-event-area-mod"]}`}>
                          <div className={`container`}>
                            <div className={`row`}>
                              <div className={`col-12`}>
                                <div className={`wpo-section-title`}>
                                  <span>Our Events</span>
                                  <h2>Upcoming Events</h2>
                                </div>
                              </div>
                            </div>
                            <div className={`row`}>
                            {items.map(item => (
                              <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid p-3`}>
                                <div className={`wpo-event-item ${styles["wpo-event-item-mod"]}`}>
                                  <div className={`wpo-event-img ${styles["wpo-event-img-mod"]}`}>
                                    <Image src={pr1} alt="" />
                                    <div className={`thumb-text ${styles["thumb-text-mod"]}`}>
                                      <span>25</span>
                                      <span>NOV</span>
                                    </div>
                                  </div>
                                  <div className={`wpo-event-text ${styles["wpo-event-text-mod"]}`}>
                                    <h2>{item.title}</h2>
                                    <ul>
                                      <li>
                                        <i className={`fa fa-clock-o`} aria-hidden="true"></i>8.00 -
                                        5.00
                                      </li>
                                      <li>
                                        <i
                                          className={`fi flaticon-pin ${styles["flaticon-pin-mod"]}`}
                                        ></i>
                                        Newyork City
                                      </li>
                                    </ul>
                                    <p className="text-break text-truncate">{item.content}</p>
                                    <Link onClick={this.ClickHandler} href="/event-details">
                                      Get Details...
                                    </Link>
                                  </div>
                                </div>
                              </div>))}
                            </div>
                            </div>
                            </div>
                              
      );
    }
}
  

  


export default EventSection;
