import { Component, OnInit } from '@angular/core';
import {ContentComponent} from '../content/content.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nodejs-content',
  templateUrl: './nodejs-content.component.html'
})
export class NodejsContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

}
