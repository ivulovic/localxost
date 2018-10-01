import { Component, OnInit } from '@angular/core';
import {ContentComponent} from '../content/content.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-authentication-content',
  templateUrl: './authentication-content.component.html'
})
export class AuthenticationContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

}
