import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EquipeModel } from '../models/equipe-model';
import { EquipeResultadoModel } from '../models/equipe-resultado-model';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  private resultado: EquipeResultadoModel[] = []

  constructor(private http: HttpClient) { }

  obterEquipes = () : Observable<EquipeModel[]> => 
    this.http.get<EquipeModel[]>(environment.copaApi('equipes'))

  gerarCopa = (equipesIds: string[]) : Observable<EquipeResultadoModel[]> =>
    this.http.post<EquipeResultadoModel[]>(environment.copaApi('partidas/copa'), equipesIds)

  armazenarResultado = (equipes: EquipeResultadoModel[]) =>    
    this.resultado = equipes.sort((equipe) => (equipe.vencedora) ? -1 : 1)
  
  obterResultado = () => this.resultado
  limparResultado = () => this.resultado = []
}

