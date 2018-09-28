import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild([
            {path: "", component: HomeComponent, pathMatch:"full"}
        ])
    ]
})
export class ReactRoutingModule {}