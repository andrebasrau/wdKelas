import React from 'react';
import './style.css';
import {Button} from 'react-bootstrap';
import Picture from './responsive web.gif';

class home extends React.Component{
    


    render (){
        return(
            <div className="containers home-container" id="home">
                <h2 className="title-home">
                    WeBee Pro
                </h2> <br></br>
                <p className="desc-title-home">
                    A Developer Website With React 
                </p>
                <div className="container-button">
                    <Button variant="outline-light">ORDER US</Button>
                    <span className="hide-space">|||</span>
                    <Button variant="success">SEE DEMO</Button>

                </div>
                <br></br>
                <div className="container-picture">
                    <img className="picture pic1"src={Picture}></img><span className="hide-space">|||</span>
                    <img className="picture pic2"src={Picture}></img><span className="hide-space">|||</span>
                    <img className="picture pic3"src={Picture}></img>
                </div>


            </div>

        );
    }


}
export default home;