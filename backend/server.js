const app = require('express')();
// Set CORS headers on all responses
app.use(require('cors')());
// const cors = require('cors');
const { NlpManager } = require('node-nlp');
// const app = express()
// app.use(cors())
const port = 3001
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = express.Router();
const manager = new NlpManager({ languages: ['en'] });
// Adds the utterances and intents for the NLP
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');

// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Greetings!');

async function train() {
    // Train the model
    await manager.train();
}

train()
// Save the model
manager.save();

manager.process('en', 'I have to go').then(console.log);
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
router.post('/newUserMsg', (req, res) => {
    const { message } = req.body;
    manager.process('en', message)
    .then(result => {
        res.send(result) 
    })
});


// append /api for our http requests
app.use('/api', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))