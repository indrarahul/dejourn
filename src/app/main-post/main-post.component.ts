import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Model } from '../models/model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.css']
})
export class MainPostComponent implements OnInit {

  standForm = new FormGroup({
    stand: new FormControl('', Validators.required)
  })

  showExp: boolean = false;
  expData: any;
  
  stands = Model.pStands

  expF($event: boolean) {
    this.showExp = $event;
  }

  stand() {

    if (this.standForm.value.stand != "") {
      this.stands.push({
        id: "s2",
        author: Model.U[0],
        location: "Gopalganj",
        daysAgo: "1 minute ago",
        option: "Aggressive",
        content: this.standForm.value.stand,
        expThrd: null,
        child: [
          
        ],
      })
    }
    this.standForm.reset()
  }

  constructor(private dataS: DataService) {
  }

  ngOnInit(): void {
    this.dataS.showExp.subscribe(data => this.showExp = data)
    Model.getData()
  }

}
