import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any=null;
  rates:any[];
  constructor(public http:HttpClient) {
    
   }

  getData()
  {
    this.http.get('https://api.openrates.io/latest').subscribe(
      (data:any)=>{ 
        this.data=data;
         this.rates=data.rates;
         
        });
  }

  getDataByBase(choice)
  {
    this.data = null;
    this.http.get('https://api.openrates.io/latest?base='+choice).subscribe(
      (data:any)=>{ 
        this.data=data;
         this.rates=data.rates;
         
        });
  }
}
