import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Model } from '../models/model';
import { DataService } from "../data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() data: any;

  expData: any
  expThreadMap = Model.expThrdMap

  sendExpData(eData: any) {
    this.dataS.anyData(true);
    this.dataS.showExpToggle(true);
    this.dataS.data(eData);
  }

  explore() {
   
    Model.exp[4].pStandId = this.data.id;
    Model.exp[4].fromUser = Model.U[0];
    Model.exp[4].forUser = this.data.author;
    Model.exp[4].child = ["se4"];
    this.dataS.anyData(false);
    this.dataS.showExpToggle(true);
    this.dataS.data(Model.exp[4]);
  }

  constructor(private dataS: DataService) {

  }

  ngOnInit(): void {
    this.dataS.expData.subscribe(data => this.expData = data)
  }

}
