# Exercício - Higher Order Functions - reduce

Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.

1 - [x] Dada uma matriz, transforme em um array.

```js
  const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
```
### Para os exercícios 2, 3 e 4 considere o array do arquivo "./src/books.js":

2 - [x]  Crie uma string com os nomes de todas as pessoas autoras.

3 - [ ] Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

4 - [ ] Encontre o livro com o maior nome.

5 - [ ] Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

```js
  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
```

6 - [ ] Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

```js
  const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
  const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
```