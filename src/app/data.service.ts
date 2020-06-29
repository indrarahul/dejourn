import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private Source = new BehaviorSubject('');
  expData = this.Source.asObservable();
  
  private ShowExpSource = new BehaviorSubject(false);
  showExp = this.ShowExpSource.asObservable();

  private AnyDataSource = new BehaviorSubject(false);
  anyDataB = this.AnyDataSource.asObservable();

  constructor() { }


  anyData(d: boolean){
    this.AnyDataSource.next(d);
  }

  data(d: any){
    this.Source.next(d);
  }

  showExpToggle(d: boolean){
    this.ShowExpSource.next(d);
  }

}
