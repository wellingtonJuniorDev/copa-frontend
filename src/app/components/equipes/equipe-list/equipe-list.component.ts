import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipeModel } from '../../models/equipe-model';
import { SnackBarService } from '../../shared/snack-bar.service';
import { EquipesService } from '../equipes.service';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.scss']
})
export class EsquipeListComponent implements OnInit {
  equipes: Observable<EquipeModel[]>;
  equipesSelecionadas: string[] = [];

  constructor(private equipeService: EquipesService,
              private snackService: SnackBarService,
              private router: Router) { }

  ngOnInit(): void {
    this.equipes = this.equipeService.obterEquipes()    
  }

  selecionarEquipe = (id: string) => {
    if (this.equipeJahFoiSelecionada(id))
    {
      this.removerEquipeSelecionada(id)
      return
    }

    this.equipesSelecionadas.push(id);
  }

  equipeJahFoiSelecionada = (id: string) => 
    this.equipesSelecionadas.includes(id)

  removerEquipeSelecionada = (id: string) =>
    this.equipesSelecionadas.splice(this.equipesSelecionadas.indexOf(id),1)

  operacaoValida = () => this.equipesSelecionadas.length == 8

  gerarCopa = () => {
    if (!this.operacaoValida()) {
      this.snackService.showMessage
        (`É necessário escolher 8 equipes, você escolheu ${this.equipesSelecionadas.length}`)
      return
    }

    this.equipeService.gerarCopa(this.equipesSelecionadas)
    .subscribe(res => {
      this.equipeService.armazenarResultado(res)
      this.router.navigate(['/results'])
    })
  }
}
