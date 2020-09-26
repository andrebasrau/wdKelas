import React from 'react'
import './style.css'

class feature extends React.Component{
    render (){
        return(
            <div className="containers container-feature" id="fet">
                <div className="title-feature-cont">
                    <h2>Main Feature</h2><br></br>
                </div><br></br>
                <div className="row1 mx-auto">
                    <div className="feature">
                        <div className="header-feature font-weight-bold">
                            &#9728; Responsive Design
                        </div>
                        <br></br>
                        <div>
                        high quality and comfortable design. have flexible images and media queries that can adapt to any devices
                        </div>
                    </div>
                    <div className="feature">
                        <div className="header-feature font-weight-bold">
                        &#9728; Security
                        </div><br></br>
                        <div>

                        100% guarented our website have our own design that different from the others to make your different that the other
                        </div>

                    </div>
                    <div className="feature">
                        <div className="header-feature font-weight-bold">
                        &#9728; E-commerce
                        </div><br></br>
                        <div>
                        our price is cheaper than other web developer company but we still give a good quality of website.
                        </div>

                    </div>
                </div>
            </div>

        );



    }
}
export default feature;