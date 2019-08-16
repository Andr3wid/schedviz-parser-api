import * as express from 'express';
import {CsvRequestModel} from '../models/csvrequest.model';
import {ScheduleItem} from '../models/schedule-item.model';

export class CsvController {
    
    static parseCsv(request: CsvRequestModel): ScheduleItem[] {
        let convertedData: ScheduleItem[] = [];

        // each line is a new object in the payload array
        if(request.content === 'lines') {
            let startIndex: number = request.headers === true ? 1 : 0;

            while(startIndex < request.payload.length) {
                let line: string[] = request.payload[startIndex].split(request.delimiter);

                let parsedLine: ScheduleItem = {
                    jobname: line[request.mapping.jobname],
                    stepname: line[request.mapping.stepname],
                    lane: line[request.mapping.lane],
                    start: +line[request.mapping.start],
                    end: +line[request.mapping.end],
                    duration: +line[request.mapping.end] - +line[request.mapping.start],
                    prevJob: null
                };
                
                convertedData.push(parsedLine);

                startIndex++;
            }
        }

        // a whole file is submitted as a single string
        else {
            
        }

        return convertedData;
    }
}