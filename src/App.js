import React from 'react';
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Users from './Users';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
