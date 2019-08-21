import {CsvRequestModel} from '../models/csvrequest.model';
import {JsonRequestModel} from '../models/jsonrequest.model';
import {XmlRequestModel} from '../models/xmlrequest.model';
import {FieldDetailsModel} from '../models/fielddetails.model';
import {ScheduleItem} from '../models/schedule-item.model';
import { start } from 'repl';
import { SortingService } from './sorting.service';

export class ConversionService {
    /**
     * Extract all distinct values of a given field in a schedule and count them.
     * @param schedule The schedule containing the fields.
     * @param fieldname The name of the field to count / extract distinct values.
     */
    static getFieldDetails(schedule: ScheduleItem[], fieldname: string): FieldDetailsModel {
        let result: FieldDetailsModel = new FieldDetailsModel();
        result.values = [];

        for(let i = 0; i < schedule.length; i++) {
            if(!result.values.includes(schedule[i][fieldname])) {
                result.values.push(schedule[i][fieldname]);
            }
        }

        result.count = result.values.length;

        return result;
    }


    /**
     * Group items in a schedule by a specific parameter.
     * @param groupby The keyword to group items by.
     * @param schedule Schedule that has to be grouped.
     */
    static groupScheduleItems(groupby: string, schedule: ScheduleItem[]): ScheduleItem[] {
        return schedule;
    }


    /**
     * Sort items in a schedule by a given parameter.
     * @param sortby The name of the parameter used for sorting.
     * @param schedule The schedule to sort.
     */
    static sortSchedule(sortby: string, schedule: ScheduleItem[]): ScheduleItem[] {
        SortingService.quickSort(schedule, sortby, 0, schedule.length-1);
        return schedule;
    }

}