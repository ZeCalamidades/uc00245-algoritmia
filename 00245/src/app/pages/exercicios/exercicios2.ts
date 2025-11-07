function exercicioArrays2() {
  console.log('--- Exercícios: Arrays ---');

  // 1️⃣ Array com 5 nomes
  const nomes = ["Ruben", "Beatriz", "Duarte", "Goncalo", "Julio"];
  console.log("Nomes no array:");
  nomes.forEach(nome => console.log(nome));

  // 2️⃣ Adicionar e remover elementos
  const lista = ["Cão", "Gato"];
  console.log("Lista inicial:", lista);

  lista.push("Cavalo"); // adicionar
  console.log("Após adicionar Cavalo:", lista);

  lista.pop(); // remover último
  console.log("Após remover último elemento:", lista);

  // 3️⃣ Imprimir somente números pares
  const numeros = [1, 4, 8, 9, 15, 16, 22, 27];
  const pares = numeros.filter(num => num % 2 === 0);
  console.log("Números pares:", pares);
}

exercicioArrays2();

function exercicioFuncoes2() {
  console.log('--- Exercícios: Funções ---');

  // 1️⃣ Função que retorna o maior número
  const maiorNumero = (a: number, b: number) => (a > b ? a : b);
  console.log("Maior número entre 17 e 2:", maiorNumero(17, 2));

  // 2️⃣ Média de um array
  const calcularMedia = (nums: number[]) => nums.reduce((t, n) => t + n, 0) / nums.length;
  console.log("Média:", calcularMedia([2, 7, 9, 14]));

  // 3️⃣ Saudação personalizada
  const saudar = (nome: string) => console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
  saudar("Roberto");
}

exercicioFuncoes2();
function exercicioCombinacao2() {
  console.log('--- Exercícios: Combinação de Conceitos ---');

  // 1️⃣ Contar aprovados (nota >= 10)
  const notas = [8, 12, 15, 7, 18];
  const aprovados = notas.filter(nota => nota >= 10).length;
  console.log(`Alunos aprovados: ${aprovados}`);

  // 2️⃣ Total da compra
  const produtos = ["Ovos", "Queijo", "Esparguete"];
  const precos = [1.9, 2.9, 3.2];

  const total = precos.reduce((soma, preco) => soma + preco, 0);
  console.log("Produtos:", produtos);
  console.log("Total da compra: €" + total.toFixed(2));

  // 3️⃣ Condicional + array
  if (total > 10) {
    console.log("Você gastou bastante hoje!");
  } else {
    console.log("Compra dentro do orçamento.");
  }
}

exercicioCombinacao2();