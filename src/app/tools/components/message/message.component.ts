import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../../../core/services/message.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'Message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnDestroy {

  data: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {

  }
  ngOnInit(){
    this.subscription = this.messageService.getMessage().subscribe(data => {
      this.data = data;
      setTimeout(()=> {
        let button = document.getElementById("modal");
        if(button){
          button.click();
        }
      }, 0)
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
