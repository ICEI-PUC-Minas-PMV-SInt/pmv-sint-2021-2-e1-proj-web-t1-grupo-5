# Plano de Testes de Software

| CASO DE TESTE         | VALIDAÇÃO DE LOGIN                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF05 - Tela de login e funcionalidade de armazenamento dos dados no localstorage previamente implementada.                                         |
| Objetivo do Teste     | Autenticar corretamente diversos usuários cadastrados para acessar a solução.                                                                 |
| Passos                | 1)Selecionar uma das opções para cadastro: Advogados, Juizes/Acessores e Digitadores. 2)Acessar preenchendo corretamente os dados com usuario e                           senha preciamente cadastrados.|
|Critérios de Êxito     | Os usuários precisam ser cadastrados e seus dados de login e senha salvos no local storage, novos usuários precisam ser cadastrados  dentre as opções disponiveis.|


| CASO DE TESTE         | OPERAÇÕES DO USUÁRIO                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF10-O usuário poderá filtrar os diferentes processos por tipos, sendo os tipos palavras chaves para cada categoria de processo.        |
| Objetivo do Teste     | Verificar se é possivel filtrar os diferentes processos por tipos, sendo os tipos de palavras chaves para cada categoria de processo    |
| Critérios de Êxito    | Os usuários cadastrados devem conseguir filtrar os diferentes processos por tipos, sendo os tipos de palavras chaves para cada categoria de processo |

| CASO DE TESTE         | OPERAÇÕES DO USUÁRIO   JUIZ/ACESSOR                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF12 - O usuário Juiz/Acessor, terá acesso a um dashboard contendo atualizações dos processos e informações dos advogados e delegados. Para a tomada de decisões com base em prioridades e data limite. |
| Objetivo do Teste     | Verificar a funcionalidade do dashboard, através de um login Juiz/Acessor.
| Passos                | 1) Após logar como Juiz/Acessor verificar se é possivel fazer alterações nos processos.2) Verificar se é possivel fazer alterações no dashboard|
| Critérios de Êxito    | Os usuários cadastrados como Juiz/Acessor devem conseguir fazer alteraçoes nos processos e no dashboard. |

| CASO DE TESTE         | OPERAÇÕES DO USUÁRIO                                                                                                                          |
| --------------------- |--------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos associados | RNF01 e RNF04 - A interface deve ser agradável e de fácil utilização, além de ser responsiva para uso em smartphones.                         |
| Objetivo do Teste     | Testar a responsividade da aplicação em um smartphone. Ademais, verificar se a interface é de facil utilização.                               |
| Passos                | 1)Ao utilizar um smartphone deve-se verificar se há ocorrência de problemas com a aplicação.2)Verificar a facil utilização da aplicação a partir da ótica de um terceiro.|
| Critérios de Êxito | Ao utilizar um smartphone não deve haver nenhum erro responsivo. |

