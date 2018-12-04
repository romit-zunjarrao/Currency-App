import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  choice:any;
  constructor(public dataService:DataService){}

  ngOnInit()
  {
    this.dataService.getData();
  }

  onChange($event)
  {
    console.log($event.target.value);
    this.choice = $event.target.value;
    this.dataService.getDataByBase(this.choice);
  }
}
