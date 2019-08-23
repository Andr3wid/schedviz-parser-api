export class ScheduleItem {
    jobname: string;
    stepname: string;
    lane: string;
    start: number;
    end: number;
    duration: number;
    color: string;
    prevJob: ScheduleItem;
}