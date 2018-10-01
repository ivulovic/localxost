import { Component, OnInit } from '@angular/core';
import {ContentComponent} from '../content/content.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deployment-content',
  templateUrl: './deployment-content.component.html'
})
export class DeploymentContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

}
