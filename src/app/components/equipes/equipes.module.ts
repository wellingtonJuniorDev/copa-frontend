import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsquipeListComponent } from './equipe-list/equipe-list.component';
import { EquipesService } from './equipes.service';
import { EquipeResultComponent } from './equipe-result/equipe-result.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EsquipeListComponent,
    EquipeResultComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EsquipeListComponent,
    EquipeResultComponent
  ],
  providers: [
    EquipesService
  ]
})
export class EquipesModule { }
