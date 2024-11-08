---
title: FAQs
description: 'Tela de Perguntas Frequentes que fornece informações sobre cálculos nutricionais e dietas.'
---

# FAQs

A tela de FAQs (Perguntas Frequentes) é responsável por apresentar informações relevantes sobre cálculos nutricionais e diferentes tipos de dietas. Esta tela é implementada em React Native e utiliza componentes como `View`, `Text`, `ScrollView` e `FooterMenu`.

## Estrutura do Componente

O componente `FAQs` é um Functional Component que recebe as propriedades de navegação e rota. Abaixo está a estrutura básica do componente:

```tsx
const FAQs: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {/* Conteúdo das FAQs */}
        </ScrollView>
      </View>
      <FooterMenu navigation={navigation} />
    </View>
  );
}
```

## Conteúdo

O conteúdo da tela é dividido em seções que abordam os seguintes tópicos:

1. **Cálculo de Informações Nutricionais**:
   - Fórmulas para calcular a Taxa Metabólica Basal (TMB) para homens e mulheres.
   - Ajustes de TMB com base no nível de atividade física.

2. **Dietas**:
   - Descrição de diferentes tipos de dietas, incluindo:
     - Dieta de Emagrecimento
     - Dieta de Ganho de Massa Muscular
     - Dieta Low Carb
   - Recomendações de macronutrientes para cada tipo de dieta.

3. **Base de Dados de Alimentos**:
   - Informações sobre a origem dos dados alimentares utilizados na aplicação.

4. **Suporte**:
   - Informações de contato para suporte via e-mail.

## Estilos

Os estilos são importados de um arquivo separado `styles`, que define a aparência visual da tela, incluindo a formatação de texto e layout.

## Navegação

O componente utiliza o `FooterMenu` para permitir a navegação entre diferentes telas da aplicação, passando as propriedades de navegação recebidas.

## Conclusão

A tela de FAQs é uma parte essencial da aplicação, fornecendo aos usuários informações úteis sobre nutrição e dietas, além de um meio de contato para suporte.