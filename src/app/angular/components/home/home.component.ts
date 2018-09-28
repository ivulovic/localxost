import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
    arr = [];
    ngOnInit(){
        this.arr = [
            {id:1, value:"1"},
            {id:2, value:"2"},
            {id:3, value:"3"},
        ];
    }
}
