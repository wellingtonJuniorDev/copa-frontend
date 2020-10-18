import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private notifier = new Subject<string>();
  public notifier$ = this.notifier.asObservable();

  showMessage = (message: string) => this.notifier.next(message);
}
