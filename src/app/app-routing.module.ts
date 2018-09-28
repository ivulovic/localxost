import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot([
            {path: '', loadChildren: './core/core.module#CoreModule'},
            {path: 'react', loadChildren: './react/react.module#ReactModule'},
            {path: 'angular', loadChildren: './angular/angular.module#AngularModule'},
            {path: '**', redirectTo:"page-not-found"}
        ])
    ]
})
export class AppRoutingModule {}