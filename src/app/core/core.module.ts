import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {CoreRoutingModule} from './core-routing.module';
import {ToolsModule} from '../tools/tools.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    ToolsModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
    static forRoot() : ModuleWithProviders{
        return {
            ngModule: CoreModule,
            providers:[]
        };
    }
}
