import { ScheduleItem } from "../models/schedule-item.model";

export class SortingService {

    /**
     * 
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
            let j: number = end;

            // pivot element
            let p: number = A[end][property];

            while(true) {
                // find element that is bigger than the pivotelement
                while(A[i][property] < p) {
                    i++;
                }

                // find element that is smaller than the pivotelement
                while(A[j][property] > p) {
                    j--;
                }

                if(i >= j) break;

                // swap the two misplaced elements
                let tmp: number = A[i][property];
                A[i][property] = A[j][property];
                A[j][property] = tmp;
            }
            // change the pivot-element to be right in the middle of the two arrays
            let tmp: number = A[i][property];
            A[i][property] = A[end][property];
            A[end][property] = tmp;

            // recursively call Quicksort on the subarrays
            this.QuickSort(A, property, start, i-1);
            this.QuickSort(A, property, i+1, end);
        }

    }
}