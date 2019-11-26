import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import ChatBox from './components/ChatBox';
import ShoppingList from './components/ShoppingList';
import AttendService from './components/AttendService';
import Week from './components/Week';
import BlockWall from './components/BlockWall';
import ConcentricCircles from './components/ConcentricCircles';
import Bar from './components/Bar';
import IconLog from './components/IconLog';
import YearInPixels from './components/YearInPixels';
import WorryTree from './components/WorryTree';
import Breath from './components/Breath';
// import UsMap from './components/UsMap';

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
        <Route path="/circles-chart" render={() => <ConcentricCircles />} />
        <Route path="/bar-chart" render={() => <Bar progressPercent="40%" />} />
        <Route path="/icon-log" render={() => <IconLog />} />
        <Route path="/year-in-pixels" render={() => <YearInPixels />} />
        <Route path="/worry-tree" render={() => <WorryTree />} />
        <Route path="/breath" render={() => <Breath />} />
        {/* <Route path="/us-map" render={() => <UsMap />} /> */}
      </Switch>
    </main>
   </Router>
  );
}

export default App;
