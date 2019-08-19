import { ScheduleItem } from "../models/schedule-item.model";

export class SortingService {

    /**
     * A QuickSort implementation that sorts a given schedule by a property.
     * The implementation features two pointers that run from start & beginning of the array until they "cross".
     * @param A The array of objects to sort.
     * @param property The property of the object used for comparison.
     * @param start Start of the sub-array for sorting.
     * @param end End of the sub-array for sorting.
     */
    static QuickSort(A: ScheduleItem[], property: string, start: number, end: number) {

        if(end > start) {
            // "left" pointer
            let i: number = start;

            // "right pointer"
            let j: number = end-1;

            // pivot element
            let p: number = A[end][property];

            while(true) {
                // find element that is bigger than the pivotelement
                while(true) {
                    if(A[i][property] >= p) break;
                    i++;
                }

                // find element that is smaller than the pivotelement
                while(true) {
                    if(A[j][property] <= p) break;
                    j--;
                }

                if(i >= j) break;

                // swap the two misplaced elements
                console.log(`Swapping ${A[i][property]} with ${A[j][property]}. (i=${i}, j=${j})`);
                let tmp: number = A[i][property];
                A[i][property] = A[j][property];
                A[j][property] = tmp;
            }
            // change the pivot-element to be right in the middle of the two arrays
            console.log("sorting the pivot into the array");
            let tmp: number = A[i][property];
            A[i][property] = A[end][property];
            A[end][property] = tmp;

            // recursively call Quicksort on the subarrays
            this.QuickSort(A, property, start, i-1);
            this.QuickSort(A, property, i+1, end);
        }

    }
}