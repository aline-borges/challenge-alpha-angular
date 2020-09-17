![banner-principal](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/hurb-project-screen.png?raw=true)

[![Netlify Status](https://api.netlify.com/api/v1/badges/83d65deb-7e08-4531-9419-d27751590bdc/deploy-status)](https://app.netlify.com/sites/hurb-angular/deploys)

# Demo

[Visite o Site](https://hurb-angular.netlify.app/)

# Hurb Web Site

[![Angular since](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/angular-pill.png?raw=true)]() [![Typescript since](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/typescript-pill.png?raw=true)]() [![Javascript since](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/javascript-pill.png?raw=true)]() [![Sass since](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/sass-pill.png?raw=true)]()

##### 

### Desafio Original

Criar um app que consuma o JSON exposto pela API de busca e apresente as informações em uma listagem sendo requisito mínimo do desafio. 

### Meu Desafio

Criar um site moderno, com uma boa usabilidade que consuma o JSON exposto pela API de busca da Hurb.

#### Lista de Elementos do Site
#

![home-page-screen](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/hurb-project-screen-home.png?raw=true)

| Tela Inicial  |
| ------ |
| Header: Menu com a logo a opção de página inicial, busca por hoteís e busca por pacotes. | 
| Form: Parte de formulário do site onde o usuário pode digitar diretamente o local que deseja realizar a pesquisa. | 
| Footer: Espaço que mostra o local de onde é a imagem do background, posssibilitando o usuário a pesquisar de forma prática. |

![hotel-page-screen](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/hurb-project-screen-hotel.png?raw=true)

| Tela de Hoteís/Pacotes  |
| ------ |
| Header: Menu com a logo a opção de página inicial, busca por hoteís e busca por pacotes. | 
| Form: Parte de formulário do site onde o usuário pode digitar diretamente o local que deseja realizar a pesquisa. | 
| Quantidade de Hoteís: Mostra o número de hóteis/pacotes que retornam da busca |

![ordenation-byLowPrice](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/hurb-project-screen-hotel-order-by-low-price.png?raw=true)

| Ordenação: Mostra o número de hóteis/pacotes ordenados por relevância, menor preço e maior preço |

![ordenation-limitedByPrice](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/hurb-project-screen-hotel-limited-by-price.png?raw=true)

| Limitação: Mostra o número de hóteis/pacotes limitados por preço. |

![ordenation-limitedByStars](https://github.com/aline-borges/challenge-alpha-angular/blob/master/src/assets/images/hurb-project-screen-hotel-order-by-stars.png?raw=true)

| Limitação: Mostra o número de hóteis/pacotes limitados por estrelas. |
| Card do Hotel: Mostra a foto, o nome, a localização, o número de estrelas, o valor da diária, tags e botão de visualizar o hotel|

## Desenvolvimento no Servidor
Para rodar esse projeto na sua maquina, após clonar o repositório, digite ng serve e navegue para o link  http://localhost:4200/. Pode digitar ng serve --open e a aplicação abre automaticamente. A aplicação faz o reload automático a cada mudança realizada no código. 

## Criar um componente
Digite ng generate component [nome do componente] para criar um novo componente. 

## Criar o projeto
Executar e construir para construir o projeto digite ng build. Os artefatos de construção serão armazenados no diretório dist/. Use a flag --prod para uma construção de produção.

## Testes de unidade em execução
Execute ng test para executar os testes unitários via Karma.

## Executar os testes de ponta a ponta
Execute ng e2e para executar os testes de ponta a ponta através do Protractor.

## Mais ajuda
Para obter mais ajuda sobre a CLI Angular use a ajuda da CLI ou vá verificar o README da CLI Angular.
