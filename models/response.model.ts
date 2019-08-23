import {ScheduleItem} from './schedule-item.model';
import {FieldDetailsModel} from './fielddetails.model';
import {ColorApiModel, ColorSchemeMode} from '../models/colorapi.model';

import {ConversionService} from '../services/conversion.service';
import {ColoringService} from '../services/coloring.service';

/**
 * Model used as response format. Every response, from every endpoint looks like this once transformation of the data has finished.
 */
export class ResponseModel {
    lanes: FieldDetailsModel;
    jobs: FieldDetailsModel;
    totalBlocksPlanned: number;
    groupedBy: string;
    sortedBy: string
    payload: any; 

    constructor(schedule: ScheduleItem[], groupby: string, sortby: string) {
        this.lanes  = ConversionService.getFieldDetails(schedule, 'lane');

        this.jobs   = ConversionService.getFieldDetails(schedule, 'jobname');

        this.totalBlocksPlanned = schedule.length;

        this.groupedBy  = groupby;
        this.sortedBy   = sortby;

        this.payload = schedule;

        if(this.sortedBy !== null && this.sortedBy !== '') {
            ConversionService.sortSchedule(this.sortedBy, this.payload);
        }

        if(this.groupedBy !== null && this.groupedBy !== '') {
            this.payload = ConversionService.groupScheduleItems(this.payload, this.groupedBy);
        }
    }

    /* in case a schedule has not been grouped, the payload stays flat, otherwise the grouped-by keys are sub-objects containing the schedule items
    Example grouped:
        ....
        groupedBy: 'jobname',
        payload: {
            job-01: [
                {
                    jobname: "job-01",
                    lane: lane-01,
                    ...
                },
                {
                    ...
                }
            ],
            job-02: [
                {
                    jobname: "job-02",
                    ....
                },
                ...
            ]
        }

     */
}