import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { ClipboardLinkComponent } from './components/clipboard-link/clipboard-link.component';
import { MessageComponent } from './components/message/message.component';
import { CodeComponent } from './components/code/code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IconComponent, ClipboardLinkComponent, MessageComponent, CodeComponent],
  exports: [IconComponent, ClipboardLinkComponent, MessageComponent, CodeComponent]
})
export class ToolsModule { }
