import {ColorApiModel, ColorSchemeMode} from '../models/colorapi.model';
import { ScheduleItem } from '../models/schedule-item.model';

/**
 * This service uses thecolorapi.com to generate dynamic color-schemes based in a certain color
 */

export class ColoringService {
    // example: http://thecolorapi.com/scheme?hex=009add&count=25&format=json&mode=quad

    private static readonly API_BASE_URL = 'http://thecolorapi.com/scheme?';


    /**
     * Generates a color scheme using thecolorapi.com
     * @param baseColorHex The base color used for the color scheme.
     * @param schemeColorCount The amount of colors that should be contained in the color-scheme.
     * @param schemeMode Mode in which the color scheme should get generated.
     */
    static getColorScheme(baseColorHex: string, schemeColorCount: number, schemeMode: ColorSchemeMode): ColorApiModel {
        
        return null;
    }

    /**
     * Colors the "blocks" of a schedule.
     * @param schedule The schedule whose blocks need some coloring.
     * @param colorScheme A generated color scheme by thecolorapi.com
     */
    static assignColors(schedule: ScheduleItem[], colorScheme: ColorApiModel) {

    }
}