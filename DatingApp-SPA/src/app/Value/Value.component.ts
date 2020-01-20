import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {
  values:any;
  constructor(private Http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.Http.get("http://localhost:5000/api/values").subscribe(response=>{
   this.values=response;
    console.log(this.values);
    },error=>{
    console.log(error);
    })
  }
}
