import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {ReactRoutingModule} from './react-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactRoutingModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class ReactModule { }
