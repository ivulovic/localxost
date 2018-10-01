import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-redux-content',
  templateUrl: './redux-content.component.html'
})
export class ReduxContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }
}
