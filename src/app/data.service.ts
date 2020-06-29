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

  constructor() { }

  data(d: any){
    this.Source.next(d);
  }

  showExpToggle(d: boolean){
    this.ShowExpSource.next(d);
  }

}
