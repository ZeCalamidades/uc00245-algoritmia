import { Component } from '@angular/core';
import { calcularArea, exibirMensagem, somarNumeros, verificarParidade } from './funcoes';

@Component({
  selector: 'app-aula02',
  imports: [],
  templateUrl: './aula02.html',
  styleUrl: './aula02.css',
})
export class Aula02 {


// 3️⃣ Arrays - Operações Básicas
// ==========================================================
exemploArrays(): void {
  console.log('--- Exemplo: Arrays ---');
 
  // Declaração e inicialização de um array de strings
  let frutas: string[] = ['maçã', 'banana', 'laranja'];
 
  // Acessando o primeiro elemento do array (índice 0)
  console.log(frutas[0]); // Output: 'maçã'
 
  // Modificando o segundo elemento do array (índice 1)
  frutas[1] = 'uva';
  console.log('Array atualizado:', frutas); // Output: ['maçã', 'uva', 'laranja']
 
  // Declaração e inicialização de um array de números
  let numeros: number[] = [1, 2, 3];
 
  // push(): Adiciona um elemento ao FINAL do array
  numeros.push(4); // Array fica: [1, 2, 3, 4]
 
  // unshift(): Adiciona um elemento no INÍCIO do array
  numeros.unshift(0); // Array fica: [0, 1, 2, 3, 4]
 
  // pop(): Remove o ÚLTIMO elemento do array
  numeros.pop(); // Array fica: [0, 1, 2, 3]
 
  // shift(): Remove o PRIMEIRO elemento do array
  numeros.shift(); // Array fica: [1, 2, 3]
 
  console.log('Array final:', numeros); // Output: [1, 2, 3]
 
  // Declaração de um array de cores
  let cores: string[] = ['vermelho', 'verde', 'azul', 'amarelo'];
 
  // Loop for tradicional para percorrer o array
  for (let i = 0; i < cores.length; i++) {
    console.log(`Cor ${i + 1}: ${cores[i]}`);
  }
 
}

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
