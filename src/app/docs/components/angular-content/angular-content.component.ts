import { Component } from '@angular/core';
import {ContentComponent} from '../content/content.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-angular-content',
  templateUrl: './angular-content.component.html'
})
export class AngularContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

}
