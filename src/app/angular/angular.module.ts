import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {AngularRoutingModule} from './angular-routing.module';
import {ToolsModule} from '../tools/tools.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularRoutingModule,
    ToolsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class AngularModule { }
