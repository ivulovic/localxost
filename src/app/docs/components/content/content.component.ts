import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'Content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}


  scrollTo(element){
    var domElement = document.getElementById(element);
    if(domElement) domElement.scrollIntoView();
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.scrollTo(params.section);
    })
  }

  goToExternalLink(link){
    var a = document.createElement("a");
    a.href = link;
    a.target="new";
    a.click();
  }
}
