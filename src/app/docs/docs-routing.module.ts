import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SassContentComponent} from './components/sass-content/sass-content.component';
import {AngularContentComponent} from './components/angular-content/angular-content.component';
import {AuthenticationContentComponent} from './components/authentication-content/authentication-content.component';
import {DeploymentContentComponent} from './components/deployment-content/deployment-content.component';
import {MongodbContentComponent} from './components/mongodb-content/mongodb-content.component';
import {NodejsContentComponent} from './components/nodejs-content/nodejs-content.component';
import {ReactContentComponent} from './components/react-content/react-content.component';
import {ReduxContentComponent} from './components/redux-content/redux-content.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: "angular/:section", component: AngularContentComponent},
      {path: "authentication/:section", component: AuthenticationContentComponent},
      {path: "deployment/:section", component: DeploymentContentComponent},
      {path: "mongodb/:section", component: MongodbContentComponent},
      {path: "nodejs/:section", component: NodejsContentComponent},
      {path: "react/:section", component: ReactContentComponent},
      {path: "redux/:section", component: ReduxContentComponent},
      {path: "sass/:section", component: SassContentComponent},
    ])
  ]
})
export class DocsRoutingModule {}