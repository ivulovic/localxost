import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { ClipboardLinkComponent } from './components/clipboard-link/clipboard-link.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IconComponent, ClipboardLinkComponent, MessageComponent],
  exports: [IconComponent, ClipboardLinkComponent, MessageComponent]
})
export class ToolsModule { }
