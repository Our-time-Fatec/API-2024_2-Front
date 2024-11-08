---
title: services
description: 'Pasta que contém os serviços utilizados na aplicação, incluindo chamadas de API e lógica de negócios.'
---

# services

A pasta `services` é responsável por encapsular a lógica de serviços da aplicação. Ela contém arquivos que gerenciam as interações com APIs e outras operações de backend, permitindo uma separação clara entre a lógica de apresentação e a lógica de negócios.

## Estrutura

A estrutura da pasta `services` pode incluir, mas não se limita a:

- **api.ts**: Arquivo que contém funções para realizar chamadas à API, gerenciando requisições e respostas.
  
## Objetivo

O objetivo principal da pasta `services` é centralizar a lógica de comunicação com serviços externos, facilitando a manutenção e a escalabilidade da aplicação. Isso permite que outras partes da aplicação, como componentes e hooks, possam interagir com os serviços de forma consistente e organizada.