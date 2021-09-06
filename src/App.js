import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Blogs from "./pages/blogs";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/blogs" component={Blogs} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
