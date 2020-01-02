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
import UsMap from './components/UsMap';
import BookLog from './components/BookLog';
import DonutChart from './components/DonutChart';
import TextImageBox from './components/TextImageBox';
import FoodTracker from './components/FoodTracker';
import GratitudeLog from './components/GratitudeLog';
import BragList from './components/BragList';
import SelfCareList from './components/SelfcareList';
import WantsVNeeds from './components/WantsVNeeds';
import FavoriteQuotes from './components/FavoriteQuotes';
import CuratedImagery from './components/CuratedImagery';
import SpendingLog from './components/SpendingLog';
import SavingsLog from './components/SavingsLog';
import FruitVeggies from './components/FruitVeggies';
import ImportantDates from './components/ImportantDates';
import MovieLog from './components/MovieLog';
import SmartGoals from './components/SmartGoals';
import HabitTracker from './components/HabitTracker';



const spendingCategories = ["Food", "Rideshares", "Entertainment", "Travel",
        "Clothing", "Beauty", "Gifts", "Cafes", "Personal Care", "Other", "Hobbies"]

function App() {

  return (
   <Router>
    <main className="App">
      <Switch>
        {/* <Route exact path="/" render={() => <ChatBox />} />
        <Route path="/us-map" render={() => <UsMap />} />
        <Route path="/service-log" render={() => <AttendService />} />
        <Route path="/block-log" render={() => <BlockWall />} />
        <Route path="/circles-chart" render={() => <ConcentricCircles />} />
        <Route path="/icon-log" render={() => <IconLog />} />
        <Route path="/food-tracker" render={() => <FoodTracker />} />
        <Route path="/fruits-veggies-log" render={() => <FruitVeggies />} />
        <Route path="/week-log" render={() => <Week />} />
        <Route path="/bar-chart" render={() => <Bar progressPercent="40%" />} />
        <Route path="/text-image-box" render={() => <TextImageBox />} /> */}

        <Route path="/breath" render={() => <Breath />} />
        <Route path="/book-log" render={() => <BookLog />} />
        <Route path="/movie-log" render={() => <MovieLog />} />
        <Route path="/gratitude-log" render={() => <GratitudeLog />} />
        <Route path="/brag-list" render={() => <BragList />} />
        <Route path="/self-care-list" render={() => <SelfCareList />} />
        <Route path="/fav-quotes" render={() => <FavoriteQuotes />} />
        <Route path="/wants-v-needs" render={() => <WantsVNeeds />} />
        <Route path="/goals" render={() => <SmartGoals />} />
        <Route path="/shopping-list" render={() => <ShoppingList />} />


        <Route path="/donut-chart" render={() => <DonutChart />} />
        <Route path="/curated-imagery" render={() => <CuratedImagery />} />
        <Route path="/spending-log"
          render={() => <SpendingLog budget="200" categoryOptions={spendingCategories} />} />
        <Route path="/savings-log" render={() => <SavingsLog savingsGoal="1000" />} />
        <Route path="/important-dates" render={() => <ImportantDates month={12} year={2019} />} />
        

        <Route path="/habit-tracker" render={() => <HabitTracker />} />
        <Route path="/year-in-pixels" render={() => <YearInPixels />} />


        <Route path="/worry-tree" render={() => <WorryTree />} />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
