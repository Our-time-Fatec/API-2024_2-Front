---
title: resultChecker
description: 'Classe responsável por validar dados de entrada do usuário, como senhas, datas, altura, peso, porções e quantidades.'
---

# ResultChecker

A classe `ResultChecker` é projetada para validar diversos dados de entrada do usuário, garantindo que as informações fornecidas estejam corretas e dentro de limites aceitáveis. Abaixo estão os métodos disponíveis e suas respectivas funcionalidades.

## Métodos

### checkSenha

```typescript
public checkSenha(formState: IUsuario): boolean
```

Valida se a senha e a confirmação de senha fornecidas pelo usuário coincidem. Se não coincidirem, um alerta é exibido e a função retorna `false`. Caso contrário, retorna `true`.

### checkNascimento

```typescript
public checkNascimento(formState: IUsuario): boolean
```

Verifica se a data de nascimento fornecida é válida. O método considera as seguintes condições:
- A data não pode ser igual à data atual.
- A data não pode ser futura.
- A data deve ser anterior a um ano a partir da data atual.

Se alguma dessas condições não for atendida, um alerta é exibido e a função retorna `false`. Caso contrário, retorna `true`.

### checkDateConscile

```typescript
public checkDateConscile(formState: IUsuario, formattedDate: Date | null | undefined): boolean
```

Compara a data de nascimento fornecida com a última data salva. Se as datas não coincidirem, um alerta é exibido e a função retorna `false`. Caso contrário, retorna `true`.

### checkAltura

```typescript
public checkAltura(formState: IUsuario): boolean
```

Valida a altura do usuário. As condições são:
- A altura não pode ser maior ou igual a 250 cm.
- A altura não pode ser menor ou igual a 80 cm.

Se alguma dessas condições não for atendida, um alerta é exibido e a função retorna `false`. Caso contrário, retorna `true`.

### checkPeso

```typescript
public checkPeso(formState: IUsuario): boolean
```

Verifica se o peso do usuário está dentro de limites razoáveis. As condições são:
- O peso não pode ser maior ou igual a 500 kg.
- O peso não pode ser menor ou igual a 20 kg.

Se alguma dessas condições não for atendida, um alerta é exibido e a função retorna `false`. Caso contrário, retorna `true`.

### checkPorcao

```typescript
public checkPorcao(porcao: string): boolean
```

Valida a porção fornecida. As condições são:
- A porção não pode ser maior ou igual a 500.
- A porção não pode ser menor ou igual a 1.

Se alguma dessas condições não for atendida, um alerta é exibido e a função retorna `false`. Caso contrário, retorna `true`.

### checkQuantidade

```typescript
public checkQuantidade(quantidade: string): boolean
```

Verifica a quantidade fornecida. As condições são:
- A quantidade não pode ser maior ou igual a 10.
- A quantidade não pode ser menor ou igual a 0.

Se alguma dessas condições não for atendida, um alerta é exibido e a função retorna `false`. Caso contrário, retorna `true`. 

## Exportação

A instância da classe `ResultChecker` é exportada como padrão, permitindo seu uso em outras partes da aplicação.