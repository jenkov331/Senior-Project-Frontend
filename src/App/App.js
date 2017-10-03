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
import RecipePreview from '../recipe/preview/RecipePreview'
import Recipe from '../recipe/Recipe'
import './App.css';
import Home from '../home/Home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }

  /*   fetch('/api/recipes', {
      method: 'get'
    }).then((response) => response.json().then((json) => {
      let recipes = [];
      json.forEach((recipe) => {
        recipes.push(() => recipe);
      });

      this.setState({ recipes });
    })); */
  }

   Home = () => (
   <span>
      {
        this.state.recipes.map((recipe) => {
          return <RecipePreview key={recipe().id} recipe={recipe} isLink={true}/>
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


  renderHeader() {
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
            <Route path="/recipes/:id" component={Recipe} />
          </Col>
        </Row>
      </Grid>
    </Router>
    ); 
  }

  renderHome() {
    return (
      <Home /> 
    );
  }

  render() {
    return (
        <div>
          <div id="header">
            {this.renderHeader()}
          </div>
          <div id="home">
            {this.renderHome()}
          </div>
        </div>
    );
  }
}
export default App;