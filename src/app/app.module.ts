import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { EquipesModule } from './components/equipes/equipes.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResultsComponent } from './components/pages/results/results.component';
import { SharedModule } from './components/shared/shared.module';
import { HandleErrorService } from './components/services/handle-error.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTPListenerInterceptor } from './components/services/http-listener-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    ResultsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EquipesModule,
    HttpClientModule,
    NgxSpinnerModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HTTPListenerInterceptor, multi: true },
    { provide: ErrorHandler, useClass: HandleErrorService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
