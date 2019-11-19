import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import ChatBox from './components/ChatBox';
import ShoppingList from './components/ShoppingList';
import AttendService from './components/AttendService';
import Week from './components/Week';
import BlockWall from './components/BlockWall';

function App() {

  return (
   <Router>
    <main className="App">
      <Switch>
        <Route exact path="/" render={() => <ChatBox />} />
        <Route path="/shopping-list" render={() => <ShoppingList />} />
        <Route path="/service-log" render={() => <AttendService />} />
        <Route path="/week-log" render={() => <Week />} />
        <Route path="/block-log" render={() => <BlockWall />} />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
