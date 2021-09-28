# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Haja vista, que atualmente o usuário interessado em acompanhar  processos jurídicos se depara com a falta de informações realcionadas à estes. Dessa forma, o projeto busca desenvolver uma aplicação web que contenha dados quanto aos procedimentos dos processos e o  progresso desses 

Assim, neste documento serão abordadas as definições de persona, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto utilizando técnicas de obtenção de dados, como questionários online, para compreender de forma específica nosso usuário e suas necessidades. 

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

ADVOGADOS
•	Como advogado, precisa registrar todos os resultados de audiências e atualizações dos casos para enviar ao fórum/comarca.
•	Como Advogado, desejo salvar o documento em um arquivo para que os clientes possam abri-lo e consultar as atualizações.
•	Como Advogado, desejo exibir na tela principal um relatório para que possa revisar todas as informações e requisitos do processo em uma única exibição.
•	Como Advogado, quero encontrar palavras - chave para que possa identificar e manipular os processos que contêm as palavras-chave pesquisadas.
•	Como Advogado, desejo imprimir uma visualização do documento para que eu possa revisar os processos sem a necessidade de executar a ferramenta.

Réu
•	Como réu, preciso consultar as atualizações do meu processo, para saber qual foi a decisão tomada pelo juiz.

Juiz/Assessor
•	Como Juiz, preciso receber as atualizações dos processos e informações dos advogados e delegados, para tomar a decisão correta e no tempo certo.
•	Como assessor, desejo salvar o documento em um arquivo para criar pastas por processo.
•	Como assessor, desejo anexar imagens e outros documentos aos processos para que eu possa ter maior controle das pendências.
•	Como juiz, quero ordenar os processos  por um atributo personalizado escolhido para que eu possa exibir o processo classificando por prioridade, crime, tipo de sentença, prazo de resposta, etc.
•	Como assessor, desejo imprimir uma visualização do documento para que eu possa revisar os requisitos sem a necessidade de executar a ferramenta.
•	Como juiz/assessor, desejo gerar um relatório de rastreabilidade para que eu possa analisar os prazos e o impacto dos processos sem resposta.

Familiar/ Terceiro 
•	Como familiar/terceiro, preciso consultar as atualizações do processo, para saber qual foi a decisão tomada pelo juiz e informar ao parente(réu)

Desenvolvedores 
•	Como desenvolvedor preciso manter o sistema em ordem e atualizado, para evitar perdas de informações e prazos de respostas por parte dos envolvido

Digitador ou similar 
•	Como digitador preciso registrar as informações no sistema para enviar as atualizações dos processos para as pessoas responsáveis.
•	Digitador , desejo salvar  automaticamente minhas alterações para não perdê-las se a ferramenta for encerrada inesperadamente antes de fechar um arquivo.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

01: Este sistema deverá ser acessado apenas por pessoas maiores de 18 anos.
02: No sistema conterá uma página com acesso permitido apenas para juízes e advogados do Fórum.
03: o sistema voltará ao início após um tempo de inatividade.



> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
