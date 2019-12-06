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
import DonutChart from './components/DonutChart';
import BookLog, {FullBook} from './components/BookLog';

const sampleBookData = [
  {
      id: 0,
      title: "Salem's Lot",
      author: "Stephen King",
      rating: 8,
      in_progress: false,
      finished_date: "11/29/2019",
      genre: "Science-Fiction",
      notes: ["Woah this book has really good writing, love meeting all the towns people", "Donec finibus, metus vitae tempor pulvinar, odio augue auctor nunc, eget ullamcorper urna arcu in lorem. Phasellus pulvinar, arcu eu cursus sollicitudin, nisl sem convallis urna, eu vulputate nibh purus quis urna. Etiam quis posuere nisl, vel sollicitudin lacus. Suspendisse arcu lacus, convallis ac congue at, ornare vel lectus. Nam sed laoreet mauris. Cras sed magna ac mauris lobortis tincidunt a vitae risus. Quisque rutrum euismod accumsan. Duis fermentum convallis felis sit amet ultricies. Sed ullamcorper id quam non faucibus. Pellentesque dolor nulla, dignissim at pulvinar sit amet, consequat vitae mi. Phasellus porta, nulla eget posuere efficitur, lacus tortor laoreet lacus, a fermentum nisl ante a quam. Suspendisse potenti. Suspendisse volutpat accumsan porttitor. Maecenas luctus luctus nisl nec pulvinar. Suspendisse purus nunc, feugiat quis purus eget, aliquet varius turpis. Nunc ultricies suscipit vestibulum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium velit nisi, at tristique justo lobortis vel. Phasellus laoreet mauris vel lacinia suscipit. Nulla in sagittis magna. Integer imperdiet nisl sed nibh vulputate pharetra. Sed dignissim suscipit mollis. Vestibulum vitae pretium leo. Vestibulum feugiat purus nibh, vel varius justo semper sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Fusce quis est metus. Phasellus feugiat maximus lectus, ut volutpat dolor dignissim sit amet. Sed ut elementum lorem. Duis magna justo, hendrerit et neque vitae, lobortis viverra diam. Nulla non volutpat urna. Nulla id ultrices massa, sed sollicitudin turpis. Donec urna tellus, rhoncus a purus at, eleifend pulvinar dui."],
      book_cover: "https://images-na.ssl-images-amazon.com/images/I/81zqDem9OvL.jpg"
  },
  {
      id: 1,
      title: "Year of Yes",
      author: "Shonda Rhimes",
      rating: 10,
      in_progress: false,
      finished_date: "10/03/2019",
      genre: "Memior",
      notes: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium velit nisi, at tristique justo lobortis vel. Phasellus laoreet mauris vel lacinia suscipit. Nulla in sagittis magna. Integer imperdiet nisl sed nibh vulputate pharetra. Sed dignissim suscipit mollis. Vestibulum vitae pretium leo. Vestibulum feugiat purus nibh, vel varius justo semper sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Fusce quis est metus. Phasellus feugiat maximus lectus, ut volutpat dolor dignissim sit amet. Sed ut elementum lorem. Duis magna justo, hendrerit et neque vitae, lobortis viverra diam. Nulla non volutpat urna. Nulla id ultrices massa, sed sollicitudin turpis. Donec urna tellus, rhoncus a purus at, eleifend pulvinar dui."],
      book_cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476777122/year-of-yes-9781476777122_hr.jpg"
  },
]

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
        <Route path="/us-map" render={() => <UsMap />} />
        <Route path="/donut-chart" render={() => <DonutChart />} />
        <Route path="/book-log" render={() => <BookLog books={sampleBookData} />} >
        </Route>
        <Route path="/book-details/:id" render={() => <FullBook book={sampleBookData[0]} />} />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
