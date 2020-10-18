import { Injectable, Injector, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, finalize, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { NgxSpinnerService } from 'ngx-spinner';



@Injectable({
    providedIn: 'root'
})
export class HTTPListenerInterceptor implements HttpInterceptor {  
  private activeRequests: number;

  constructor(private injector: Injector, private ngZone: NgZone) {
    this.activeRequests = 0;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const spinner = this.injector.get(NgxSpinnerService);
    let spinnerName: string = 'default';
     
    spinner.show(spinnerName);
    this.activeRequests++;

    return next.handle(req).pipe(
      map(event => event),

      catchError(error => Observable.throw(error)),

      finalize(() => {
        this.activeRequests--;
        if(this.activeRequests <= 0) {
          this.activeRequests = 0;
          this.ngZone.run(() => spinner.hide(spinnerName));          
        }
      })
    )
  }
}