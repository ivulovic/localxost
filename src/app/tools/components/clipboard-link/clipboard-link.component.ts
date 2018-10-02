import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from '../../../core/services/message.service';

@Component({
  selector: 'ClipboardLink',
  templateUrl: './clipboard-link.component.html'
})
export class ClipboardLinkComponent {

  @Input() id;

  constructor(private router: Router, private messageService: MessageService) { }

  copyToClipboard(elementId){
    this.router.navigate(['/docs', location.pathname.split("/")[2], elementId]);
    setTimeout(()=>{
      var dummy = document.createElement('input');
      var text = window.location.href;
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      this.messageService.sendMessage("Success!", "Link successfully copied to clipboard!", "check");
    }, 0)
  }
}
