const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./db');
const userRoute = require('../backend/routes/user.route')
// Set CORS headers on all responses
// const cors = require('cors');
const { NlpManager } = require('node-nlp');
// const app = express()
// app.use(cors())
const port = 3001
const logger = require('morgan');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)
// const router = app.Router();
const manager = new NlpManager({ languages: ['en'] });
// Adds the utterances and intents for the NLP
// Hello Goodbye
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye bitch', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'tah tah', 'greetings.bye');
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');
manager.addDocument('en', "what's up", 'greetings.hello');
manager.addDocument('en', "sup", 'greetings.hello');
manager.addDocument('en', "hey boo", 'greetings.hello');

// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'Byeeeee!');
manager.addAnswer('en', 'greetings.bye', 'Bye!');
manager.addAnswer('en', 'greetings.bye', 'Alright then!');
manager.addAnswer('en', 'greetings.bye', 'See you soon!');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Hi!');
manager.addAnswer('en', 'greetings.hello', "What's up");

// Worry Tree
manager.addDocument('en', "start worry", 'worrytree.started');
manager.addDocument('en', "worry start", 'worrytree.started');
manager.addDocument('en', "again", 'worrytree.started');
manager.addDocument('en', "trigger worry", 'worrytree.started');
manager.addDocument('en', "I have another worry", 'worrytree.started');
manager.addDocument('en', "start worrytree", 'worrytree.started');
manager.addDocument('en', "start worry tree", 'worrytree.started');
manager.addDocument('en', "worry tree start", 'worrytree.started');
manager.addDocument('en', "my worry is", 'worrytree.userWorry');
manager.addDocument('en', "I'm worried about", 'worrytree.userWorry');
manager.addDocument('en', "This is my worry", 'worrytree.userWorry');
manager.addDocument('en', "tackle worry no", 'worrytree.noTackleWorry');
manager.addDocument('en', "tackle worry nope", 'worrytree.noTackleWorry');
manager.addDocument('en', "tackle worry I can't", 'worrytree.noTackleWorry');
manager.addDocument('en', "tackle worry yes", 'worrytree.yesTackleWorry');
manager.addDocument('en', "tackle worry yup", 'worrytree.yesTackleWorry');
manager.addDocument('en', "tackle worry I can", 'worrytree.yesTackleWorry');
manager.addDocument('en', "tackle worry yes I can", 'worrytree.yesTackleWorry');
manager.addDocument('en', "timing tackle worry now", 'worrytree.nowTackleWorry');
manager.addDocument('en', "timing tackle worry right now", 'worrytree.nowTackleWorry');
manager.addDocument('en', "timing tackle worry yes", 'worrytree.nowTackleWorry');
manager.addDocument('en', "timing tackle worry yup", 'worrytree.nowTackleWorry');
manager.addDocument('en', "timing tackle worry no", 'worrytree.laterTackleWorry');
manager.addDocument('en', "timing tackle worry nope", 'worrytree.laterTackleWorry');
manager.addDocument('en', "timing tackle worry later", 'worrytree.laterTackleWorry');


manager.addAnswer('en', 'worrytree.started', "What are you worried about?");
manager.addAnswer('en', 'worrytree.started', "Tell me what you're worried about?");
manager.addAnswer('en', 'worrytree.started', "What worry is on your mind right now?");
manager.addAnswer('en', 'worrytree.userWorry', "Is this worry something you can do something about?");
manager.addAnswer('en', 'worrytree.userWorry', "Is it possible for you to do something about it?");
manager.addAnswer('en', 'worrytree.userWorry', "Is this something that you can solve?");
manager.addAnswer('en', 'worrytree.userWorry', "Is this worry within your control?");
manager.addAnswer('en', 'worrytree.noTackleWorry', "Let this worry go and change your focus!");
manager.addAnswer('en', 'worrytree.noTackleWorry', "Let it go. Let it go. Let it go. And then focus on something else!");
manager.addAnswer('en', 'worrytree.noTackleWorry', "Good news! You can let it go and then focus on something else!");
manager.addAnswer('en', 'worrytree.yesTackleWorry', "Is this something you can do now or later?");
manager.addAnswer('en', 'worrytree.yesTackleWorry', "Great! Is this something you can do now or later?");
manager.addAnswer('en', 'worrytree.nowTackleWorry', "Do it! And then change your focus.");
manager.addAnswer('en', 'worrytree.laterTackleWorry', "Schedule it! And then change your focus.");

// Food Tracker
manager.addDocument('en', "start food tracker", 'foodTracker.started');
manager.addDocument('en', "food tracker start", 'foodTracker.started');
manager.addDocument('en', "I just ate", 'foodTracker.userFood');
manager.addDocument('en', "food healthy no", 'foodTracker.foodNotHealthy');
manager.addDocument('en', "food healthy nope", 'foodTracker.foodNotHealthy');
manager.addDocument('en', "food healthy not at all", 'foodTracker.foodNotHealthy');
manager.addDocument('en', "food healthy it was not healthy", 'foodTracker.foodNotHealthy');
manager.addDocument('en', "food healthy it was fatty high carb", 'foodTracker.foodNotHealthy');
manager.addDocument('en', "food healthy not healthy", 'foodTracker.foodNotHealthy');
manager.addDocument('en', "food healthy it was high calorie", 'foodTracker.foodNotHealthy');
manager.addDocument('en', "food healthy yes", 'foodTracker.foodHealthy');
manager.addDocument('en', "food healthy yup", 'foodTracker.foodHealthy');
manager.addDocument('en', "food healthy it was healthy", 'foodTracker.foodHealthy');
manager.addDocument('en', "food healthy yeah", 'foodTracker.foodHealthy');
manager.addDocument('en', "food healthy confirmed", 'foodTracker.foodHealthy');
manager.addDocument('en', "food healthy low calorie low carb", 'foodTracker.foodHealthy');
manager.addDocument('en', "my food motivations", 'foodTracker.foodMotivation');


manager.addAnswer('en', 'foodTracker.started', "What did you eat?");
manager.addAnswer('en', 'foodTracker.started', "Tell me, what have you eaten?");
manager.addAnswer('en', 'foodTracker.userFood', "Got it. By your personal definition of healthy, would you say that it was healthy?");
manager.addAnswer('en', 'foodTracker.userFood', "Okay cool. By your personal definition of healthy, would you say that it was healthy?");
manager.addAnswer('en', 'foodTracker.userFood', "Got it. Do you consider it healthy?");
manager.addAnswer('en', 'foodTracker.userFood', "Okay cool. Would you say that it was healthy?");
manager.addAnswer('en', 'foodTracker.foodHealthy', "Great job! What were your motivations for eating: nourishment, fun, mindless or binging?");
manager.addAnswer('en', 'foodTracker.foodHealthy', "Sweet! What were your motivations for eating: nourishment, fun, mindless or binging?");
manager.addAnswer('en', 'foodTracker.foodHealthy', "Nice! What were your motivations for eating: nourishment, fun, mindless or binging?");
manager.addAnswer('en', 'foodTracker.foodNotHealthy', "No worries! What were your motivations for eating: nourishment, fun, mindless or binging?");
manager.addAnswer('en', 'foodTracker.foodNotHealthy', "Got it. What were your motivations for eating: nourishment, fun, mindless or binging?");
manager.addAnswer('en', 'foodTracker.foodMotivation', "Got it. And good job on logging a food entry!");

async function train() {
    // Train the model
    await manager.train();
}

train()
// Save the model
manager.save();

manager.process('en', 'I have to go').then(console.log)
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/newUserMsg', function (req, res) {
    res.send('GET request to the homepage')
  })
app.post('/newUserMsg', (req, res) => {
    const { text } = req.body;
    console.log(text, 'text')
    manager.process('en', text)
    .then(result => {
        res.send(result) 
    })
});

app.use('/users', userRoute)


// append /api for our http requests
// app.use('/api', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))