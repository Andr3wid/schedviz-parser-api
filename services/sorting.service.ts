import { ScheduleItem } from "../models/schedule-item.model";

export class SortingService {

    /**
     * Swap the values of A[i] and A[j].
     * @param A Any array.
     * @param i One index within the array "A".
     * @param j Another index within the array "A".
     */
    private static swap(A: object[], i: number, j: number): void {
        let tmp: any = A[i];

        A[i] = A[j];
        A[j] = tmp;
    }


    /**
     * Used by QuickSort.
     * Chooses the rightmost element as the pivot and partitions the array in a way that can be used by
     * recursive QuickSort calls in order to sort the array. Returns the position of the found pivot element.
     * @param A The schedule to sort.
     * @param property The property to sort by.
     * @param start Start index.
     * @param end Ending index.
     */
    private static pivotize(A: ScheduleItem[], property: string, start: number, end: number): number {
        let pivot = A[end][property];

        // i will indicate the index of the last found element that is smaller than the pivot
        let i: number = (start-1);

        // look through the array to find all elements that are smaller than the pivot element
        for(let j = start; j <= end-1; j++) {

            // swap the smaller element with the actual position of "i"
            if(A[j][property] <= pivot) {
                i++;
                this.swap(A, i, j);
            }

        }

        // swap the pivot element between the found smaller elements and the bigger elements
        this.swap(A, i+1, end);
        
        return (i+1);
    }


    /**
     * A QuickSort implementation that sorts a given schedule by a property.
     * @param A The array of objects to sort.
     * @param property The property of the object used for comparison.
     * @param start Start of the sub-array for sorting.
     * @param end End of the sub-array for sorting.
     */
    static quickSort(A: ScheduleItem[], property: string, start: number, end: number) {
        if(start < end) {
            let pivotIndex: number = this.pivotize(A, property, start, end);

            this.quickSort(A, property, start, pivotIndex-1);
            this.quickSort(A, property, pivotIndex+1, end);
        }
    }
}