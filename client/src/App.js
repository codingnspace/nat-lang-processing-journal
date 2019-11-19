import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import ChatBox from './components/ChatBox';
import ShoppingList from './components/ShoppingList';
import AttendService from './components/AttendService';
function App() {

  return (
   <Router>
    <main className="App">
      <Switch>
        <Route exact path="/" render={() => <ChatBox />} />
        <Route path="/shopping-list" render={() => <ShoppingList />} />
        <Route path="/service-log" render={() => <AttendService />} />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
