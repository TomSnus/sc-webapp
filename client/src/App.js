import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            dbResponse: "", 
            listContainersResponse: "",
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({
              listContainersResponse: res
            }))
            .catch(err => err);
    }

    callListContainers() {
      fetch("http://localhost:9000/listContainers")
          .then(res => res.text())
          .then(res => this.setState({
              apiResponse: res
          }))
          .catch(err => err);
  }

    callDB() {
        fetch("http://localhost:9000/testDB")
            .then(res => res.text())
            .then(res => this.setState({
                dbResponse: res
            }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        this.callDB();
        this.callListContainers();
    }

    render() {
            return (
              <Router>
                <div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/users">Users</Link>
                      </li>
                    </ul>
                  </nav>
          
                  {}
                  <Switch>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/users">
                      <Users />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </Router>
            );
          }
}

function Home() {
    return <h2>Home</h2>;
  }
  function About() {
    return <h2>About</h2>;
  }
  function Users() {
    return <h2>Users</h2>;
  }

export default App;