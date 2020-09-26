import React from 'react'
import ReactImage from './react.png';
import ReduxImage from './redux.png';
import RouterImage from './router.png';
import WebPackImage from './webpack.png';
import JssImage from './jss.png';
import MaterialImage from './material.png';

class technology extends React.Component{
    render (){
        return(
            <div className ="containers container-technology" id="tech">
                <div className="title-feature-cont">
                    <h2>Technology</h2>
                    <p>cras convallis lacus orci, tritique tincidunt magna consequat in</p>
                </div><br></br>
                <div className="feature-responsive">

                
                <div className="row3">
                    <div className="container-figure">
                        <div className="figure">
                            <img className="logo-tec"src={ReactImage}></img>
                        </div>
                        <h5>React JS</h5>
                    </div>
                    <div className="container-figure">
                        <div className="figure">
                            <img className="logo-tec" src = {ReduxImage}></img>
                        </div>
                        <h5>React JS</h5>
                    </div>
                    <div className ="container-figure">
                        <div className="figure">
                            <img className="logo-tec" src ={MaterialImage}></img>
                        </div>
                        <h5>React JS</h5>
                    </div>
                </div>
                <div className="row3">
                    <div className="container-figure">
                        <div className="figure">
                            <img className="logo-tec" src={RouterImage}></img>
                        </div>
                        <h5>React JS</h5>
                    </div>
                    <div className="container-figure">
                        <div className="figure">
                            <img className="logo-tec" src = {WebPackImage}></img>
                        </div>
                        <h5>React JS</h5>
                    </div>
                    <div className ="container-figure">
                        <div className="figure">
                            <img className="logo-tec" src ={JssImage}></img>
                        </div>
                        <h5>React JS</h5>
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
export default technology;