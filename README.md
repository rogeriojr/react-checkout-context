# Carrinho de Compras em React com Hooks e Context API

Este projeto é um exemplo básico de um carrinho de compras desenvolvido em React, utilizando os conceitos de Hooks e Context API. Ele permite adicionar produtos ao carrinho, remover itens, editar a quantidade e exibir o subtotal e total da compra.

## Estrutura do Projeto

O projeto é dividido em três partes principais:

1. **CartContext.js**: Este arquivo contém a implementação do Contexto do Carrinho, onde é definido o estado global do carrinho, juntamente com as funções para adicionar, remover e atualizar a quantidade dos itens.

2. **Cart.js**: Este componente é responsável por exibir os itens no carrinho, permitindo ao usuário remover itens, editar a quantidade e exibir o subtotal da compra.

3. **Product.js**: Este é um componente de produto simples que pode ser adicionado ao carrinho. Ele exibe informações sobre o produto e fornece um botão para adicionar o item ao carrinho.

4. **App.js**: O componente principal da aplicação. Ele importa o `CartProvider` do `CartContext.js` para fornecer o contexto do carrinho a toda a aplicação. Além disso, ele renderiza alguns produtos e o componente de carrinho.

## Como Executar o Projeto

Clone o repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
Navegue até o diretório do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

Execute o aplicativo:

```bash
npm start
```
O aplicativo estará disponível em http://localhost:3000 no seu navegador.

## Personalização
Você pode personalizar este projeto adicionando mais produtos, estilos, ou implementando funcionalidades adicionais conforme necessário.

## Contribuição
Se você encontrar problemas ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Espero que este exemplo básico seja útil para compreender como criar um carrinho de compras com React, hooks e Context API. Divirta-se codificando!