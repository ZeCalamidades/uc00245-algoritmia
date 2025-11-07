import { Component } from '@angular/core';
import { calcularArea, exibirMensagem, somarNumeros, verificarParidade } from './funcoes';

@Component({
  selector: 'app-aula02',
  imports: [],
  templateUrl: './aula02.html',
  styleUrl: './aula02.css',
})
export class Aula02 {

  // ==========================================================
  // 3️⃣ Arrays - Operações Básicas
  // ==========================================================
  exemploArrays(): void {
    console.log('--- Exemplo: Arrays ---');
 
    let frutas: string[] = ['maçã', 'banana', 'laranja'];
    console.log(frutas[0]);
    frutas[1] = 'uva';
    console.log('Array atualizado:', frutas);
 
    let numeros: number[] = [1, 2, 3];
    numeros.push(4);
    numeros.unshift(0);
    numeros.pop();
    numeros.shift();
    console.log('Array final:', numeros);
 
    let cores: string[] = ['vermelho', 'verde', 'azul', 'amarelo'];
    for (let i = 0; i < cores.length; i++) {
      console.log(`Cor ${i + 1}: ${cores[i]}`);
    }
  }
 
  exemplosArrayObject = () => {
    const alunos = [
      { nome: 'Ana', idade: 20, curso: 'Informática', media: 15.5 },
      { nome: 'Bruno', idade: 22, curso: 'Gestão', media: 12.8 },
      { nome: 'Carla', idade: 19, curso: 'Multimédia', media: 17.3 },
      { nome: 'Diego', idade: 21, curso: 'Programação', media: 9.4 },
    ];
 
    console.log("Array de Objectos: " +'Idade: ',  alunos[0].idade, ' Curso: ', alunos[0]['curso']);
    return alunos;
  };
// ==========================================================
  // 4️⃣ Funções com Parâmetros e Retornos
  // ==========================================================
  exemploFuncoes(): void {
    console.log('--- Exemplo: Funções com Parâmetros e Retornos ---');
 
    console.log('Área:', calcularArea(5, 3));
 
    console.log('Soma total:', somarNumeros([10, 20, 30, 40]));
 
    console.log('4 é', verificarParidade(4));
    console.log('7 é', verificarParidade(7));
 
    exibirMensagem('Bem-vindo ao TypeScript!');
  }
 
 
 
}
