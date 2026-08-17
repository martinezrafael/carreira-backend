## Desafio

1. Primeiro baixamos os arquivos de texto que serão utilizados no projeto
2. Criamos o repositório no GitHub e clonamos na nossa maquina
3. Movemos os arquivos de texto para dentro do repositório do projeto
4. Criamos a pasta src no repositório do projeto
5. Criamos o arquivo `index.js` dentro da pasta src, esse arquivo será o ponto de entrada da nossa aplicação
6. Tentamos utilizar o require no nosso arquivo `index.js` para acessar um dos arquivos de texto do projeto e recebemos um erro, porque o require tenta ler e executar o conteúdo do arquivo e ele só funciona com módulos, aquivos JavaScript ou equivalentes, ex.: um arquivo json.
7. Substituimos o require que tentamos utilizar no `index.js` pelo process.argv

```
Passamos o `process.argv` da seguinte forma no arquivo index.js:

const caminhoArquivo = process.argv;

console.log(caminhoArquivo);

Quando rodamos o comando node no arquivo, ele inprimiu o seguinte array no terminal:

[
  '/home/martinezrafael/.nvm/versions/node/v24.19.0/bin/node', // endereço no meu computador onde estão os arquivos binários do node
  '/home/martinezrafael/dev/study/alura/carreira-backend-nodejs/code/count-repeat-words/src/index.js' //Onde está o código que vai ser interpretado
]

o comando process.argv ou vetor de argumento, pega os valores que são passados pelo terminal e coloca esses valores em um array e eles são passados para esse array,na ordem em que eles são executados 

Se no momento em que eu digitar o comando no terminal, eu adicionar mais uma palavra, essa palavra também será colocada dentro do array:

martinezrafael@martinezrafael-pc:~/dev/study/alura/carreira-backend-nodejs/code/count-repeat-words$ node src/index.js alura
[
  '/home/martinezrafael/.nvm/versions/node/v24.19.0/bin/node',
  '/home/martinezrafael/dev/study/alura/carreira-backend-nodejs/code/count-repeat-words/src/index.js',
  'alura'
]
martinezrafael@martinezrafael-pc:~/dev/study/alura/carreira-backend-nodejs/code/count-repeat-words$


Se eu alterar o código e passar o índice do array que eu quero inprimir no console, ele vai inprimir apenas o item especificado:

const caminhoArquivo = process.argv;

console.log(caminhoArquivo[2]);

martinezrafael@martinezrafael-pc:~/dev/study/alura/carreira-backend-nodejs/code/count-repeat-words$ node src/index.js alura
alura
martinezrafael@martinezrafael-pc:~/dev/study/alura/carreira-backend-nodejs/code/count-repeat-words$ 


```

8. Usamos o process.argv para montar um array com os conteudos retornados no terminal e pegamos o item da 2 posição que é passado junto a execução do arquivo `index.js`
9. criamos uma função para contar as palavras, a função vai se chamar `verificaPalavrasDuplicadas`.



## Identificando tipos de erros

