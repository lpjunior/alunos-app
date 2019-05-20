import { Component } from '@angular/core';
import { Aluno } from './modelo/aluno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alunos-app';
  
  listaAlunos:Aluno[] = [
    {nome: 'Douglas', email: 'douglas@senac.br'}, 
    {nome: 'Pablo', email: 'scobar@senac.br'}, 
    {nome: 'Matheus', email: 'matheus@senac.br'}, 
    {nome: 'Gabriel', email: 'gabi@senac.br'}, 
    {nome: 'Yuri', email: 'yuri@senac.br'}, 
    {nome: 'Cassio', email: 'cassio@senac.br'}, 
    {nome: 'Dimitri', email: 'dimi@senac.br'}, 
    {nome: 'Lilian', email: 'lilian@senac.br'}, 
    {nome: 'João', email: 'joao@senac.br'}, 
    {nome: 'Luiz', email: 'luiz@senac.br'}, 
    {nome: 'Matheus G.', email: 'g.matheus@senac.br'}, 
    {nome: 'Marcio', email: 'matheus@senac.br'}];
}
