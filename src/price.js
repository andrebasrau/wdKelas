import React from 'react'
import {Button} from'react-bootstrap'



class price extends React.Component {
    render (){

        return (
            <div class="card-container">
                <div className = "card-price" >
                        <h6>{this.props.type}</h6>
                        <h1 className ="font-weight-bold large">{this.props.price}</h1>
                        <br></br>
                        <p>{this.props.desc1}</p>
                        <p>{this.props.desc2}</p>
                        <p>{this.props.desc3}</p>
                        <br></br>
                        <Button variant="outline-light">GET IT NOW</Button>
                </div>

            </div>
        );
    }
}

export default price;