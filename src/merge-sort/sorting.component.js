import React, { Component } from 'react';
import { SortingService } from './sorting-service';
import { Partition } from './partition';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

export class SortingComponent extends Component {

  constructor() {
    super();

    this.state = {partitions:  []};
    this.sortingService = new SortingService();
  }

  componentDidMount() {
    
    this.sortingService
        .notifier
        //.delay(1000)
        .map(i => i)
        .subscribe(res => {

          let partitions = this.state.partitions;
      
          let node = partitions.find(p => p.parentId === res.parentId);
          
          if(!node) {
            node = {fragments: [], parentId: res.parentId};
            partitions.push(node);
          }
          
          let itms = res.items.map(itm => {
            return itm;
          });

          node.fragments.push(itms);

          this.setState({partitions: partitions});
        });
  
    let partition = new Partition(0, [55, 1, 2, 4, 9, 77, 3, 65]);
    this.sortingService.mergeSort(partition);    
  }

  render() {
    
    let fragments = this.state.partitions.map((key, index) => {
         return <div key={index} className="fragment-row">
         {
          key.fragments.map((numbers, index) =>
            <span className="group" key={index}>
            {
              numbers.map((number, index) => {
                return <span key={index} className="number">{number}</span>
              })
            }
            </span>
          )
        }
</div>
      });
    
    return (
      <div>
        <h4>Merge Sort</h4>
        {fragments}
      </div>
    );
  }
}
