import { Subject } from 'rxjs/Subject';
import { Partition } from './partition';

export class SortingService {

  constructor() {
    this.notifier = new Subject();
  }  

  mergeSort(currentPartition) {
    if (currentPartition.isSingleItemList()) {
      return currentPartition;
    }

    let left = currentPartition.getLeftHalf();
    let right = currentPartition.getRightHalf();

    this.notify(left);
    this.notify(right);  
    
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right){
    let result = [];
  
    while (!left.isEmpty() && !right.isEmpty()) {
      if (left.first() < right.first()){
        result.push(left.items.shift());
      } 
      else {
        result.push(right.items.shift());
      }
    }
    let newId = `${left.id}-${right.id}`;
    result = result.concat(left.items).concat(right.items);

    let newPartition = new Partition(newId, result);
    
    this.notify(newPartition);
    
    return newPartition;
  }

  notify(partition) {
    this.notifier.next(partition);
  }
}