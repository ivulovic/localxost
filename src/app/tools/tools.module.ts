import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { ClipboardLinkComponent } from './components/clipboard-link/clipboard-link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IconComponent, ClipboardLinkComponent],
  exports: [IconComponent, ClipboardLinkComponent]
})
export class ToolsModule { }
