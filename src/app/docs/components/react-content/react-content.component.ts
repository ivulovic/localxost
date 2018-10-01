import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-react-content',
  templateUrl: './react-content.component.html'
})
export class ReactContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

}
