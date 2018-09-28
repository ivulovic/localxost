import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  pathname = '';

  constructor(private route: Router){
      route.events.subscribe((val)=>{
          if(val instanceof NavigationEnd){
              this.pathname = val.url;
          }
      })
  }

  toggleMenu(){
    document.getElementsByClassName("menu-responsive")[0].classList.toggle("hidden");
  }

}
