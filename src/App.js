import "./styles.css";
import "./search.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import about from "./pages/about";
import works from "./pages/works";
import Home from "./pages/home";
import writing from "./pages/writing";
import social from "./pages/social";
import AllResults from "./pages/allResults";
import NotFound from "./pages/notFound";
import ProjectsPage from "./pages/projectsPage";
import ImagesPage from "./pages/imagesPage";
import BlogPage from "./pages/blogPage";
import Chat from "./pages/chat";
import Certification from "./pages/chat";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllResults} />
          <Route path="/all" component={AllResults} />
          <Route path="/about" component={about} />
          <Route path="/certification" component={Certification}/>
          <Route path="/works" component={works} />
          <Route path="/social" component={social} />
          <Route path="/projects" component={ProjectsPage} />
          {/*<Route path="/images" component={ImagesPage}/>*/}
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
