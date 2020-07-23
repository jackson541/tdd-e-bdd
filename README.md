<h1 align='center'>Tdd e Bdd</h1>

<p align='justify'>Tdd (<i>Test Driven Development</i>) e Bdd (<i>Behaviour Driven Development</i>) são importantes conceitos muito importantes na hora de devenvolver um software, 
principalmente quando ele terá integração contínua. Se trata, basicamente, de criar os testes de um software antes mesmo de criá-lo e, após desenvolvido, 
verificar se todas as integrações estão funcionando corretamente. Ou seja, os testes são criados e o desenvolvimento do software é guiado por esses testes existentes. 
<a href='https://blog.locaweb.com.br/artigos/metodologias-ageis/diferenca-entre-bdd-tdd/' >Para mais informações</a></p>

![imagem](https://media-exp1.licdn.com/dms/image/C4D12AQE0VSoRKSqsHQ/article-cover_image-shrink_600_2000/0?e=1600905600&v=beta&t=ENd5gdrz1lfPjEX31jFIk1Mp5NuLAzNCAfsYmqrncmg)

## Funcionalidades
- Testes unitários do monolito
- Testes de integração do monolito

## Frameworks utilizados
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## Como rodar na sua máquina
Instalar as dependências
```
npm install
```

Rodar o projeto
```
npm start
```

Rodar testes de Tdd
```
npm run tdd
```

Rodar testes de Bdd
```
npm run bdd
```
OBS: os testes de bdd estão rodando pelo Firefox. Caso deseje alterar o navegador, altere a linha 8 do arquivo `package.json`

## Pontos a mais
Fique a vontade para dar uma olhada no código, abrir uma issue para falarmos sobre algo ou dar um pull request. :grin:
