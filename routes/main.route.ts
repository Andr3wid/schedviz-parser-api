import * as express from 'express';
import {CsvController} from '../controllers/csv.controller';
import {CsvRequestModel} from '../models/csvrequest.model';
import {ResponseModel} from '../models/response.model';

class MainRoute {
    public router: express.Router = express.Router();

    constructor() {
        this.loadroutes();
    }

    private loadroutes(): void {
        this.router.get('/', (req: express.Request, res: express.Response) => {
            res.send("Welcome to SchedViz parser API.");
        });



        this.router.post('/csv', (req: express.Request, res: express.Response) => {
            let schedule: CsvRequestModel = req.body;

            let parsedCsv = CsvController.parseCsv(schedule);
            let response: ResponseModel = new ResponseModel(parsedCsv, null, null);

            res.send(response);
        });



        this.router.post('/xml', (req: express.Request, res: express.Response) => {
            res.send("XML endpoint not implemented.");
        });



        this.router.post('/json', (req: express.Request, res: express.Response) => {
            res.send("JSON endpoint not implemented.");
        });



        this.router.post('/asp', (req: express.Request, res: express.Response) => {
            res.send("ASP endpoint not implemented.");
        });
    }
}

export const mainRoute = new MainRoute().router;