import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot([
            {path: '', loadChildren: './core/core.module#CoreModule'},
            {path: 'docs', loadChildren: './docs/docs.module#DocsModule'},
            {path: '**', redirectTo:"page-not-found"}
        ])
    ]
})
export class AppRoutingModule {}