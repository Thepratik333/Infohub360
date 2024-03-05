const connectmongo = require("./db");
const express = require('express')
var cors = require('cors')
connectmongo();

const app = express()
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://infohub360.onrender.com', // Change to your frontend URL in production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
 
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {    
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Inotebook app listening on port ${port}`)
})



