import {Mapping} from './mapping.model';

export class CsvRequestModel {
    payloadtype: string;
    content: string;
    mappingtype: string;
    delimiter: string;
    headers: boolean;
    mapping: Mapping;
    payload: string[];
}