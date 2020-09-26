import React from 'react'
import Price from './price.js'

class priceList extends React.Component{
    state = {
        prices : [
            {id :1, type : 'Design Template', price : 'FREE', desc1:'vel fermentum', desc2 : 'anean facilities vitae', desc3 : 'Vestibulum nec'},
            {id :2, type : 'Your Design', price : '$24', desc1:'vel fermentum', desc2 : 'anean facilities vitae', desc3 : 'Vestibulum nec'},
            {id :3, type : 'Your Design with Mentor', price : '$200', desc1:'vel fermentum', desc2 : 'anean facilities vitae', desc3 : 'Vestibulum nec'},
        ]
    }
    render (){
        const lists = this.state.prices.map((item)=>
        // <div className="container-pricing1">
            <Price key = {item.id} type ={item.type}price = {item.price} desc1= {item.desc1} desc2 = {item.desc2} desc3 = {item.desc3}/>
        // </div>
        )
        return (
            <div className="row3 rowPrice">
                
                {lists};
            </div>
        );
    }
}
export default priceList