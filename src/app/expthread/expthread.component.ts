import { EventEmitter, Input, Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Model } from '../models/model';
import { DataService } from "../data.service";

@Component({
  selector: 'app-expthread',
  templateUrl: './expthread.component.html',
  styleUrls: ['./expthread.component.css']
})
export class ExpthreadComponent implements OnInit {

  @Input() showMe: boolean;
  @Output() hideMe = new EventEmitter<boolean>();
  anyData: boolean = false;

  data: any;

  expThreadMap = Model.expThrdMap
  pStandsMap = Model.pStandsMap

  standForm = new FormGroup({
    stand: new FormControl('', Validators.required)
  })

  hideMef() {
    this.showMe = false
    this.hideMe.emit(this.showMe);
  }

  stand() {

    if (this.data.fromUser.id != "u0") {
      alert("You are not allowed!! You are Rahul not " + this.data.forUser.name + " or " + this.data.fromUser.name);
      this.standForm.reset();
      return
    }

    if (this.standForm.value.stand != "") {

      Model.expThrds[4].author = Model.U[0];
      Model.expThrds[4].location = "Patna";
      Model.expThrds[4].daysAgo = "4 days ago";
      Model.expThrds[4].option = "Aggressive";
      Model.expThrds[4].content = this.standForm.value.stand;

      this.pStandsMap[this.data.pStandId].child.push(this.data);      
      this.dataS.data(Model.exp[4]);
      this.anyData = true;
    }

    this.standForm.reset();
  }

  constructor(private dataS: DataService) {
  }

  ngOnInit(): void {
    this.dataS.expData.subscribe(data => this.data = data)
    this.dataS.anyDataB.subscribe(data => this.anyData = data)
  }

}
