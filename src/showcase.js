import React from 'react';
import {CardDeck, Card, Button} from 'react-bootstrap';
import Spotify from './spotify.PNG'
import Air from './airbnb.PNG'
import Fb from './fb.PNG'
class showcase extends React.Component{
    render (){
        return (
            <div className="containers container-showcase" id="show">
                <div className="title-feature-cont">
                    <h2>Showcase</h2>
                    <p>our web from another project</p>
                </div><br></br>
                <CardDeck className="deck">
                    <Card>
                        <Card.Img variant="top" src={Spotify} />
                        <Card.Body>
                        <Card.Title>Spotify</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="primary">VISIT SITE</Button>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Air} />
                        <Card.Body>
                        <Card.Title>Airbnb</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                            additional content. 
                        </Card.Text>
                        <Button variant="primary">VISIT SITE</Button>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Fb} />
                        <Card.Body>
                        <Card.Title>Facebook</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. 
                        </Card.Text>
                        <Button variant="primary">VISIT SITE</Button>
                        </Card.Body>
                        
                    </Card>
                </CardDeck>
            </div>
        );
    }
}
export default showcase;