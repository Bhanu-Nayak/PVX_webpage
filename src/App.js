import Nav from "./components/Nav";
import Header from "./components/Header";
import Group from "./views/Group";
import Drive from "./components/Drive";
import Others from "./components/Others";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Community from "./views/Community";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GroupStateProvider from "./views/GroupStateProvider";
import { useState } from "react";

function App() {
  const [wagroups, setWagroups] = useState(GroupStateProvider());

  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Header />
          <Group wagroups={wagroups} setWagroups={setWagroups} />
          <Drive />
          <Others />
          <Admin />
        </Route>

        <Route exact path="/community">
          <Community />
        </Route>

        <Route>
          <p style={{ padding: "100px 0 50px 0" }}>you're in wrong url.</p>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
