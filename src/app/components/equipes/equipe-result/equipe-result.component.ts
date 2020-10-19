import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeResultadoModel } from '../../models/equipe-resultado-model';
import { EquipesService } from '../equipes.service';

@Component({
  selector: 'app-equipe-result',
  templateUrl: './equipe-result.component.html',
  styleUrls: ['./equipe-result.component.scss']
})
export class EquipeResultComponent implements OnInit {
  equipesClassificadas: EquipeResultadoModel[] = []

  constructor(public equipeService: EquipesService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.copaFoiGerada()) {
      this.router.navigate(['/'])
    }    
  }

  copaFoiGerada = (): boolean => {
    this.equipesClassificadas = this.equipeService.obterResultado()
    this.equipeService.limparResultado()
    return this.equipesClassificadas.length > 0
  }
}
