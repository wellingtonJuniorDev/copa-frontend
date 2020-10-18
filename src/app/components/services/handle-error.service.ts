import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SnackBarService } from '../shared/snack-bar.service';
import { HttpStatus } from '../models/http-status-model';


@Injectable({ 
    providedIn: 'root'
 })
export class HandleErrorService extends ErrorHandler {
    private snackService: SnackBarService;
    
    constructor(private injector: Injector,
                private ngZone: NgZone) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any): void {
        this.snackService = this.injector.get(SnackBarService)
        
        if(!environment.production) console.log(errorResponse);

        if(errorResponse instanceof HttpErrorResponse) {
            const containsMessage: boolean = this.seachErrorMessages(errorResponse);

            this.ngZone.run(() => {
                switch (errorResponse.status) {
                  case 0:
                      this.snackService.showMessage(HttpStatus.Indisponivel);
                      break;
                  case 400:
                      if(!containsMessage)
                       this.snackService.showMessage(HttpStatus.DadosInvalidos);
                    break;
                  case 401:
                    this.snackService.showMessage(HttpStatus.AcessoNegado);                   
                    break;
                  case 403:
                    this.snackService.showMessage(HttpStatus.SemPrivilegios);
                    this.redirect("/");
                    break;
                  case 404:
                    this.snackService.showMessage(HttpStatus.NaoEncontrado);
                    break;
                  case 408:
                    this.snackService.showMessage(HttpStatus.TempoExcedido);
                    break;
                  case 415:
                    this.snackService.showMessage(HttpStatus.FormatoInvalido);
                    break;
                  case 500:
                    this.snackService.showMessage(HttpStatus.ErroInterno);
                    break;
                  default:
                    this.snackService.showMessage(HttpStatus.Inesperado);
                    break;
                  }
                });
              } 
              else
              this.ngZone.run(() => 
                this.snackService.showMessage(HttpStatus.Inesperado));
    }

    seachErrorMessages = (errorResponse: HttpErrorResponse): boolean => {
        
        if(errorResponse.error && errorResponse.error.errors) {
            this.ngZone.run(() => 
                errorResponse.error.errors.Messages
                    .forEach(e => this.snackService.showMessage(e)))
            
            return true;
        }

        return false;
    }

    redirect = (route: string) => 
        this.injector.get(Router).navigate([route])
}