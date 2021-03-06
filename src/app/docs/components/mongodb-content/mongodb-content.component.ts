import { Component, OnInit } from '@angular/core';
import {ContentComponent} from '../content/content.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mongodb-content',
  templateUrl: './mongodb-content.component.html'
})
export class MongodbContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

}
