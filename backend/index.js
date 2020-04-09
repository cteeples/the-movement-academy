import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/facultyRoutes';
import cors from 'cors';

const app = express();
const PORT = 8000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tmaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 
//this is where you would enter url address and params to get to it

//bodyparser setup
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app); //saying that we have the routes available

app.get('/', (req, res) => 
res.send(`Our Application is running on port ${PORT}`)
);

app.listen(PORT, () => 
console.log(`server is running on port ${PORT}`)
);

