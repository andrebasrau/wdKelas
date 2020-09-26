import React from 'react'
import PriceList from './priceList.js'
import './style.css'
class pricing extends React.Component{
    render (){
        return (
            <div className = "containers container-pricing" id="pricing">
                <div className="title-feature-cont">
                    <h2>Pricing</h2>
                    <p>cras convallis lacus orci, tritique tincidunt magna consequat in</p>
                </div><br></br>
                {/* <div className ="row2"> */}
                
                        <PriceList/>
                    
                {/* </div> */}
            </div>
        );
    }
}
export default pricing;