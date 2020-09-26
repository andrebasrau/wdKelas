import React from 'react'
import './style.css'
import {Form, Button} from 'react-bootstrap'
import $ from 'jquery'
class contact extends React.Component{

    checkAdd (email){
        let counterAdd = 0;
        let counterDots = 0;
        if (email.startsWith('@') == true){
          return false;
        }
        else if (email.startsWith('.') == true){
          return false;
        }else{
          for (let i =0; i<email.length; i++){
            if (email[i] =='@' ){
              counterAdd++;
            }if (email[i] == '.'){
              counterDots++;
            }if (email[i] == '.' &&(email[i+1] == '.' || email[i+1]=='@')){
              return false;
            }if (email[i] == '@' && (email[i+1] == '.' || email[i+1] == '@')){
              return false;
            }
          }
          if(counterAdd == 1){
            if (counterDots >= 1){
              return true;
            }else{
              return false;
            }
          }else{
            return false;
          }
    
        }
      }

    submitHandler(event){
        
        var name = document.getElementById('input-name').value;
        var email = document.getElementById('input-email').value;
        var feedback = document.getElementById('input-feedback').value;
        if (name.length >= 5 && name.length <= 25){
            if (email.length != 0){
              if (this.checkAdd (email) == true){
                if (feedback.length > 0){
                  event.preventDefault();
                  event.stopPropagation();
                  alert ("Thank you for the feedback 😊");
                  $('#input-name').val('');
                  $('#input-email').val('');
                  $('#input-feedback').val('');
                  return false;
                }else{
                  event.preventDefault();
                  event.stopPropagation();
                  alert ("feedback cannot be empty");
                }
              }else{
                event.preventDefault();
                event.stopPropagation();
                alert ("email format wrong");
              }
            }else{
              event.preventDefault();
              event.stopPropagation();
              alert ("email must be filled");
            }
          }else {
            event.preventDefault();
            event.stopPropagation();
            alert ("Name must be filled with 5 to 25 characters");
          }
    }

    render (){
        return (
            <div className="container-contact" id="con">
                <div className="container-title-contact">
                    <h2 className ="title-container-contact">Say Hello To Us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odio, sunt atque quae ex consectetur veritatis temporibus eos ipsam eaque unde dicta delectus recusandae assumenda voluptatum ratione harum vel ullam.</p>
                </div>
                {/* <div className="flex-contact"> */}
                    <form className="flex-contact" id="feedback1" onSubmit= {(event)=>this.submitHandler(event)}>
                        <div className="flex1-contact">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                
                                <Form.Control type="text" id="input-name"placeholder="your name?" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                
                                <Form.Control type="text" id="input-email" placeholder="your email?" />
                            </Form.Group>
                        </div>
                        <div className="flex1-contact">
                            
                            <Form.Control as="textarea" id="input-feedback" rows="3" placeholder = "messages" />
                            <br></br>
                            <div>
                        <Button type="submit" className="but-contact"variant="primary">Send</Button>
                        </div>    
                        </div>
                        
                    </form>
                {/* </div> */}
            </div>
        );
    }
    
}
export default contact