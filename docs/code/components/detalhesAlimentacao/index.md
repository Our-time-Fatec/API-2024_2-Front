---
title: DiaDetalhesModal
description: 'Componente modal que exibe detalhes nutricionais de um dia específico em uma dieta semanal.'
---

# DiaDetalhesModal

O componente `DiaDetalhesModal` é um modal que apresenta informações detalhadas sobre um dia específico de uma dieta semanal. Ele é utilizado em aplicações React Native e permite que os usuários visualizem dados nutricionais de forma clara e interativa.

## Props

O componente aceita as seguintes propriedades:

- **selectedDay**: `DiasSemana | null`  
  O dia selecionado da semana. Se não houver um dia selecionado, deve ser `null`.

- **dietaSemanal**: `IDietaSemanal`  
  Um objeto que contém os dados nutricionais da dieta semanal, estruturado de acordo com a interface `IDietaSemanal`.

- **isVisible**: `boolean`  
  Um valor booleano que determina se o modal deve ser exibido ou não.

- **onClose**: `() => void`  
  Uma função que é chamada quando o modal deve ser fechado.

## Exemplo de Uso

```jsx
<DiaDetalhesModal
  selectedDay={DiasSemana.SEGUNDA}
  dietaSemanal={dietaSemanal}
  isVisible={isModalVisible}
  onClose={() => setModalVisible(false)}
/>
```

## Estrutura do Componente

O componente utiliza o `Modal` do React Native para exibir as informações. Dentro do modal, são apresentados os seguintes dados nutricionais:

- Valor Energético
- Proteínas
- Carboidratos
- Fibras
- Lipídios

Cada um desses valores é extraído do objeto `dietaSemanal` com base no `selectedDay`. Se o dia não estiver selecionado, os valores padrão são `0`.

## Estilos

Os estilos do componente são importados de um arquivo separado (`styles`), permitindo uma melhor organização e manutenção do código.

## Considerações

- O modal é exibido com uma animação de deslizamento (`slide`) e é transparente.
- O botão "Fechar" permite que o usuário feche o modal e retorne à interface anterior.