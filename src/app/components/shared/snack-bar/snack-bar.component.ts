import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { SnackBarService } from '../snack-bar.service';
import { trigger, state, style, transition, animate} from '@angular/animations';

const snackVisibility = 
  trigger('snack-visibility', [
      state('hidden', style({ opacity: 0, bottom: '0px' })),
      state('visible', style({ opacity: 1, bottom: '30px' })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
])

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  animations: [ snackVisibility ]
})
export class SnackBarComponent implements OnInit {
  message: string;
  snackVisibility: string = "hidden";

  constructor(private snackService: SnackBarService) { }

  ngOnInit(): void {
    this.snackService.notifier$
    .do(message => {
      this.message = message;
      this.snackVisibility = 'visible';
    }).switchMap(() => Observable.timer(3500))
      .subscribe(() => this.snackVisibility = 'hidden')
  }
}
