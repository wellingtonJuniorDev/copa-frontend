import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SnackBarService } from './snack-bar.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      HeaderComponent,
      SnackBarComponent
    ],
    imports: [
      BrowserAnimationsModule,
      CommonModule,      
    ],
    exports: [
        HeaderComponent,
        SnackBarComponent
    ],
    providers: [
      SnackBarService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class SharedModule { }