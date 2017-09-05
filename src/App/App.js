import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import {
  Row,
  Col,
  Grid,
  ButtonToolbar,
  OverlayTrigger,
  Button,
  Popover
} from 'react-bootstrap'
import Calculator from '../calculator/component/Calculator'
import Header from '../header/Header'
import RecipePreview from '../recipe/preview/RecipePreview.js'
import Icon from '../images/foodImage.jpg'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: () => { return []; }
    }

    fetch('/api/recipes', {
      method: 'get'
    }).then((response) => response.json().then((json) => {
      console.log(json);
      console.log(this.response);
      this.setState({ response: () => { return json; } });
    }));
  }

  Home = () => (
    <span>
      {
        this.state.response().map((response) => {
          return <RecipePreview key={response.id} name={response.name} prepTime={response.prepTime} cookTime={response.cookTime} servings={response.servings} imageSrc={Icon} />
        })
      }
    </span>
  )

  About = () => (
    <ButtonToolbar>
      <OverlayTrigger trigger="click" placement="left" overlay={this.CalculatorPopover}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="top" overlay={this.CalculatorPopover}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={this.CalculatorPopover}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="right" overlay={this.CalculatorPopover}>
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
    </ButtonToolbar>
  )

  Topics = ({ match }) => (
    <div>
      <h2>Topics2</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/rendering`}>
            Rendering with React
        </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/components`}>
            Components
        </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`}>
            Props v. State
        </NavLink>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={this.Topic} />
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )} />
    </div>
  )

  Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )

  CalculatorPopover = (
    <Popover title="Popover right" id="id">
      <Calculator miniature={true} />
    </Popover>
  )

  render() {
    console.log("HHH", this);
    console.log("HHH", this.state);
    return (
      <Router className="app-component">
        <Grid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row className="app-body">
            <Col>
              <Route exact path="/" component={this.Home} />
              <Route path="/about" component={this.About} />
              <Route path="/topics" component={this.Topics} />
              <Route path="/calculator" component={Calculator} />
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}
export default App;
