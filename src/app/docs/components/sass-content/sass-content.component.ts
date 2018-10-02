import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-sass-content',
  templateUrl: './sass-content.component.html'
})
export class SassContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

  overlayColors=[
    {name: "ocean-blue", start:"2E3192", end: "1BFFFF"},
    {name: "mars", start:"d17646", end: "c63939"},
    {name:"leaf", start:"4db2ec", end:"4a8f5e"},
    {name: "pink", start:"d760b7", end: "3b78b4"},
    {name: "sanguine", start:"D4145A", end: "FBB03B"},
    {name: "luscious-lime", start:"009245", end: "FCEE21"},
    {name: "purple-lake", start:"662D8C", end: "ED1E79"},
    {name: "ultramarine", start:"00A8C5", end: "FFFF7E"},
    {name: "fresh-papaya", start:"ED1C24", end: "FCEE21"},
    {name: "pink-sugar", start:"D74177", end: "FFE98A"},
    {name: "lemon-drizzle", start:"FB872B", end: "D9E021"},
    {name: "victoria-purple", start:"312A6C", end: "852D91"},
    {name: "spring-greens", start:"009E00", end: "FFFF96"},
    {name: "mystic-muave", start:"B066FE", end: "63E2FF"},
    {name: "reflex-silver", start:"808080", end: "E6E6E6"},
    {name: "neon-glow", start:"00FFA1", end: "00FFFF"},
    {name: "berry-smoothie", start:"8E78FF", end: "FC7D7B"},
    {name: "new-leaf", start:"00537E", end: "3AA17E"},
    {name: "pixle-dust", start:"D585FF", end: "00FFEE"},
    {name: "fizzy-peach", start:"F24645", end: "EBC08D"},
    {name: "sweet-dream", start:"3A3897", end: "A3A1FF"},
    {name: "firebrick", start:"45145A", end: "FF5300"},
    {name: "evening-light", start:"93278F", end: "00A99D"},
  ];

  selectedOverlay = this.overlayColors[0];

  selectOverlay(color) {
    this.selectedOverlay = color;
  }

}
