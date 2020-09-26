import React from 'react';
import Feature from './feature.js'
import './App.css';
import './style.css';
import Logo2 from "./chrome1.png";
import Home from './home.js';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import $ from 'jquery'
import Testimonial from './testimonial.js'
import Pricing from './pricing.js';
import Technology from './technology.js';
import ShowCase from './showcase.js';
import Contact from './contact.js';
class App extends React.Component {

  


  componentDidMount = ()=>{
    $('#option1').on('click', function(){
      $('#option1').css('color', 'rgb(72,136,207)');
      $('#cont-option1').css('background-color','rgb(227, 242, 253)');
      $('#option2').css('color', 'black');
      $('#cont-option2').css('background-color','rgb(243, 251, 253)');
      $('#option3').css('color', 'black');
      $('#cont-option3').css('background-color','rgb(243, 251, 253)');
      $('#option4').css('color', 'black');
      $('#cont-option4').css('background-color','rgb(243, 251, 253)');
      $('#option5').css('color', 'black');
      $('#cont-option5').css('background-color','rgb(243, 251, 253)');
      $('#option6').css('color', 'black');
      $('#cont-option6').css('background-color','rgb(243, 251, 253)');
      $('#option7').css('color', 'black');
      $('#cont-option7').css('background-color','rgb(243, 251, 253)');
    });

    $('#option2').on('click', function(){
      $('#option2').css('color', 'rgb(72,136,207)');
      $('#cont-option2').css('background-color','rgb(227, 242, 253)');
      $('#option1').css('color', 'black');
      $('#cont-option1').css('background-color','rgb(243, 251, 253)');
      $('#option3').css('color', 'black');
      $('#cont-option3').css('background-color','rgb(243, 251, 253)');
      $('#option4').css('color', 'black');
      $('#cont-option4').css('background-color','rgb(243, 251, 253)');
      $('#option5').css('color', 'black');
      $('#cont-option5').css('background-color','rgb(243, 251, 253)');
      $('#option6').css('color', 'black');
      $('#cont-option6').css('background-color','rgb(243, 251, 253)');
      $('#option7').css('color', 'black');
      $('#cont-option7').css('background-color','rgb(243, 251, 253)');
    });
    $('#option3').on('click', function(){
      $('#option3').css('color', 'rgb(72,136,207)');
      $('#cont-option3').css('background-color','rgb(227, 242, 253)');
      $('#option1').css('color', 'black');
      $('#cont-option1').css('background-color','rgb(243, 251, 253)');
      $('#option2').css('color', 'black');
      $('#cont-option2').css('background-color','rgb(243, 251, 253)');
      $('#option4').css('color', 'black');
      $('#cont-option4').css('background-color','rgb(243, 251, 253)');
      $('#option5').css('color', 'black');
      $('#cont-option5').css('background-color','rgb(243, 251, 253)');
      $('#option6').css('color', 'black');
      $('#cont-option6').css('background-color','rgb(243, 251, 253)');
      $('#option7').css('color', 'black');
      $('#cont-option7').css('background-color','rgb(243, 251, 253)');
    });
    $('#option4').on('click', function(){
      $('#option4').css('color', 'rgb(72,136,207)');
      $('#cont-option4').css('background-color','rgb(227, 242, 253)');
      $('#option1').css('color', 'black');
      $('#cont-option1').css('background-color','rgb(243, 251, 253)');
      $('#option3').css('color', 'black');
      $('#cont-option3').css('background-color','rgb(243, 251, 253)');
      $('#option2').css('color', 'black');
      $('#cont-option2').css('background-color','rgb(243, 251, 253)');
      $('#option5').css('color', 'black');
      $('#cont-option5').css('background-color','rgb(243, 251, 253)');
      $('#option6').css('color', 'black');
      $('#cont-option6').css('background-color','rgb(243, 251, 253)');
      $('#option7').css('color', 'black');
      $('#cont-option7').css('background-color','rgb(243, 251, 253)');
    });
    $('#option5').on('click', function(){
      $('#option5').css('color', 'rgb(72,136,207)');
      $('#cont-option5').css('background-color','rgb(227, 242, 253)');
      $('#option1').css('color', 'black');
      $('#cont-option1').css('background-color','rgb(243, 251, 253)');
      $('#option3').css('color', 'black');
      $('#cont-option3').css('background-color','rgb(243, 251, 253)');
      $('#option4').css('color', 'black');
      $('#cont-option4').css('background-color','rgb(243, 251, 253)');
      $('#option2').css('color', 'black');
      $('#cont-option2').css('background-color','rgb(243, 251, 253)');
      $('#option6').css('color', 'black');
      $('#cont-option6').css('background-color','rgb(243, 251, 253)');
      $('#option7').css('color', 'black');
      $('#cont-option7').css('background-color','rgb(243, 251, 253)');
    });
    $('#option6').on('click', function(){
      $('#option6').css('color', 'rgb(72,136,207)');
      $('#cont-option6').css('background-color','rgb(227, 242, 253)');
      $('#option1').css('color', 'black');
      $('#cont-option1').css('background-color','rgb(243, 251, 253)');
      $('#option3').css('color', 'black');
      $('#cont-option3').css('background-color','rgb(243, 251, 253)');
      $('#option4').css('color', 'black');
      $('#cont-option4').css('background-color','rgb(243, 251, 253)');
      $('#option5').css('color', 'black');
      $('#cont-option5').css('background-color','rgb(243, 251, 253)');
      $('#option2').css('color', 'black');
      $('#cont-option2').css('background-color','rgb(243, 251, 253)');
      $('#option7').css('color', 'black');
      $('#cont-option7').css('background-color','rgb(243, 251, 253)');
    });
    $('#option7').on('click', function(){
      $('#option7').css('color', 'rgb(72,136,207)');
      $('#cont-option7').css('background-color','rgb(227, 242, 253)');
      $('#option1').css('color', 'black');
      $('#cont-option1').css('background-color','rgb(243, 251, 253)');
      $('#option3').css('color', 'black');
      $('#cont-option3').css('background-color','rgb(243, 251, 253)');
      $('#option4').css('color', 'black');
      $('#cont-option4').css('background-color','rgb(243, 251, 253)');
      $('#option5').css('color', 'black');
      $('#cont-option5').css('background-color','rgb(243, 251, 253)');
      $('#option6').css('color', 'black');
      $('#cont-option6').css('background-color','rgb(243, 251, 253)');
      $('#option2').css('color', 'black');
      $('#cont-option2').css('background-color','rgb(243, 251, 253)');
    });
    $('.symbol').on('click', function(){
      $('.menu').css('left', '+=200px');
      $('.menu').css('transition', '0.5s');
    });
    $('.op').on('click', function (){
      $('.menu').css('left', '-=200px');
      $('.menu').css('transition', '0.5s');
    });

  }
  check (){
    console.log(this.props.location.pathname);
  }


  render (){
    return (
      <div>
        <Router className="router-container">
          
        <div className ="flex">
          <div className ="menu">
            <div className="container-logo">
            <img className ="logo"src={Logo2}></img>
            </div>
            
            <div className="title-menu">
              <span>WeBee Pro</span>
            </div>
            <nav class="list-menu">
              <div id="cont-option1"className="option" >
                <NavLink id="option1"className="option-isi" to='/'>HOME</NavLink>
              </div>
              <div className="option" id="cont-option2">
                <NavLink id="option2"className="option-isi"to='/feature'>FEATURE</NavLink>
              </div>
              <div className="option" id="cont-option3">
                <NavLink id="option3"className="option-isi"to='/showcase'>SHOWCASE</NavLink>
              </div>
              <div className="option" id="cont-option4">
                <NavLink id="option4"className="option-isi" to='/testimonial'>TESTIMONIAL</NavLink>
              </div>
              <div className="option" id="cont-option5">
                <NavLink id="option5"className="option-isi"to='/technology'>TECHNOLOGY</NavLink>
              </div>
              <div className="option" id="cont-option6">
                <NavLink id="option6"className="option-isi"to='/pricing'>PRICING</NavLink>
              </div>
              <div className="option" id="cont-option7">
                <NavLink id="option7"className="option-isi" to='/contact'>CONTACT</NavLink>
              </div>
            </nav>
            <hr></hr>
            <footer className ="foot">
            <span>&copy; 2019 WeBee Designs</span> <br></br>
            <span>All Right Reserved</span>

            </footer>
          </div>
          <div className="background-web">
          
            <Route exact path='/' exact component={Home} />
            <Route path='/feature' exact component={Feature}/>
            <Route path='/showcase' exact component={ShowCase}/>
            <Route path='/testimonial' exact component={Testimonial}/>
            <Route path='/technology' exact component={Technology}/>
            <Route path ='/pricing' exact component = {Pricing}/>
            <Route path ='/contact' exact component ={Contact}/>
            
          </div>

        </div>
        </Router>
        <div className="responsive">
          <div className="nav-flex-container">
            <div className="col-1 symbol">
              &#8801;
            </div>
            <div className ="menu">
            <div className="container-logo">
            <img className ="logo"src={Logo2}></img>
            </div>
            
            <div className="title-menu">
              <span>WeBee Pro</span>
            </div>
            <nav class="list-menu">
              <div id="cont-option1"className="option" >
                <a className="option-isi op" href="#home">HOME</a>
                
                {/* <NavLink id="option1"className="option-isi" to='/'>HOME</NavLink> */}
              </div>
              <div className="option" id="cont-option2">
              <a className="option-isi op" href="#fet">FEATURE</a>
                {/* <NavLink id="option2"className="option-isi"to='/feature'>FEATURE</NavLink> */}
              </div>
              <div className="option" id="cont-option3">
              <a className="option-isi op" href='#show'>SHOWCASE</a>
                {/* <NavLink id="option3"className="option-isi"to='/showcase'>SHOWCASE</NavLink> */}
              </div>
              <div className="option" id="cont-option4">
              <a className="option-isi op" href='#test'>TESTIMONIAL</a>
                {/* <NavLink id="option4"className="option-isi" to='/testimonial'>TESTIMONIAL</NavLink> */}
              </div>
              <div className="option" id="cont-option5">
              <a className="option-isi op" href='#tech'>TECHNOLOGY</a>
                {/* <NavLink id="option5"className="option-isi"to='/technology'>TECHNOLOGY</NavLink> */}
              </div>
              <div className="option" id="cont-option6">
              <a className="option-isi op" href="#pricing">PRICING</a>
                {/* <NavLink id="option6"className="option-isi"to='/pricing'>PRICING</NavLink> */}
              </div>
              <div className="option" id="cont-option7">
              <a className="option-isi op" href='#con'>CONTACT</a>
                {/* <NavLink id="option7"className  ="option-isi" to='/contact'>CONTACT</NavLink> */}
              </div>
            </nav>
            <hr></hr>
            <footer className ="foot">
            <span>&copy; 2019 WeBee Designs</span> <br></br>
            <span>All Right Reserved</span>

            </footer>
          </div>
            
            <div className="col-11 container-title">
            <img className ="logo2"src={Logo2}></img>
            WeBee Pro
            </div>
          </div>
          <div className="body-responsive">
            <Home />
            <Feature/>
            <ShowCase />
            <Testimonial />
            <Technology />
            <Pricing />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
