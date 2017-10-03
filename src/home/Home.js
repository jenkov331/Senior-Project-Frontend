import React from 'react';
import './Home.css';
import {
    Jumbotron,
    Button, 
    Grid,
    Row,
    Col,
    Image
} from 'react-bootstrap'

class Home extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {};
    }*/

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Hello, world!</h1>
                            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <p><Button bsStyle="primary">Learn more</Button></p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src="https://github.com/jenkov331/Senior-Project-Frontend/blob/master/src/images/login_buttons.jpg?raw=true" />
                    </Col>
                    </Row>
            </Grid>
        );
    }
}

export default Home;