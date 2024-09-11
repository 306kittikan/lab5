import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routes);


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('kittikan aiadhai 306')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// http://localhost:3000/api/products