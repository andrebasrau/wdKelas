import React from 'react'
import {Carousel} from 'react-bootstrap';
import Video from './McKesson -  Testimonial Video.mp4'
import $ from 'jquery';
import './style.css'
class testimonial extends React.Component{

   
    render (){
        return(
            
            <div className ="containers testi-container" id="test">
                <div className="title-testi">
                    <h3>What People Said ? </h3>
                    <br></br>
                </div>
                <br></br>
                <div className="carousel-container">
                            <video className="video" controls>
                                <source src={Video} type="video/mp4" />
                            </video>
                    
                </div>
            </div>
        );
    }


}
export default testimonial;