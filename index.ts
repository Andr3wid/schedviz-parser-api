import * as express from 'express';
import * as bodyParser from 'body-parser';
import {mainRoute} from './routes/main.route';
import {CsvRequestModel} from './models/csvrequest.model';
import {ConversionService} from './services/conversion.service';

const app   = express();
const port  = 3000;

///////////////////////////// MIDDLEWARE /////////////////////////////

// logging middleware
app.use((req, res, next) => {
    console.log(`-> Request from ${req.ip}`);
    next();
});

// parse body content into request object
app.use(bodyParser.json());

// validate if the request is sanely formatted, terminate prematurely if not
app.use((req, res, next) => {
    let validationPassed: boolean = true;


    if(validationPassed) next();
    else {
        res.header(400).send;
    }
    
});



///////////////////////////// ROUTING /////////////////////////////

app.use('/', mainRoute);


///////////////////////////// SERVER /////////////////////////////

app.listen(port, () => {
    console.log(`SchedViz parser API started on port ${port}`);
});