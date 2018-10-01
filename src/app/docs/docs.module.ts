import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {DocsRoutingModule} from './docs-routing.module';
import { SassContentComponent } from './components/sass-content/sass-content.component';
import { ReduxContentComponent } from './components/redux-content/redux-content.component';
import { ReactContentComponent } from './components/react-content/react-content.component';
import { AngularContentComponent } from './components/angular-content/angular-content.component';
import { NodejsContentComponent } from './components/nodejs-content/nodejs-content.component';
import { MongodbContentComponent } from './components/mongodb-content/mongodb-content.component';
import { AuthenticationContentComponent } from './components/authentication-content/authentication-content.component';
import { DeploymentContentComponent } from './components/deployment-content/deployment-content.component';
import {ToolsModule} from '../tools/tools.module';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DocsRoutingModule,
    ToolsModule
  ],
  declarations: [SassContentComponent, ReduxContentComponent, ReactContentComponent, AngularContentComponent, NodejsContentComponent, MongodbContentComponent, AuthenticationContentComponent, DeploymentContentComponent, ContentComponent]
})
export class DocsModule { }
