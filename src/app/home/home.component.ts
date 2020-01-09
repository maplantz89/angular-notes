// creating our own observable using interval

import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.firstObservableSubscription = interval(1000).subscribe(count => {
      console.log(count)
    })

    // REAL CUSTOM OBSERVABLE
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        // completes the observable third option (data, error, complete)
        if(count === 2){
          observer.complete();
        }
        if(count > 3){
          // when an observable throws an error it will stop emitting values (it unsubscribes)
          // AN ERROR CANCELS BUT DOES NOT COMPLETE
          observer.error(new Error('Count in greater than 3!'));
        }
        count++;
      }, 1000)
    });

    // Operator happens before you subscribe and allows you to manipulate the data you are managing
    customIntervalObservable.pipe(map(data => {
      return 'Trnasformed data: ' + data; 
    }));

    this.firstObservableSubscription = customIntervalObservable.subscribe(countData => {
      console.log(countData);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      // don't need to unsubscribe if the observable is completed
      console.log('Completed');
    });

// how to subscribe to your piped method  
// (just one example using map there are many different pipe operators)
    this.firstObservableSubscription =  customIntervalObservable.pipe(map(data => {
      return 'Trnasformed data: ' + data; 
    })).subscribe(countData => {
      console.log(countData);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      // don't need to unsubscribe if the observable is completed
      console.log('Completed');
    });
  }

  // important must destroy observables in order to stop the subscription 
  // when navigating away from the component you are currently on
  ngOnDestroy(): void{
    this.firstObservableSubscription.unsubscribe();
  }
}
