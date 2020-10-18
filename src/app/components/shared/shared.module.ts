import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackHomeComponent } from './back-home/back-home.component';
import { HeaderComponent } from './header/header.component';
import { SnackBarService } from './snack-bar.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
      BackHomeComponent,
      HeaderComponent,
      SnackBarComponent
    ],
    imports: [
      BrowserAnimationsModule,
      CommonModule,      
    ],
    exports: [
        BackHomeComponent,
        HeaderComponent,
        SnackBarComponent
    ],
    providers: [
      SnackBarService
    ]
  })
  export class SharedModule { }