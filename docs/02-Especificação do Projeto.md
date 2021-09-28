# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Haja vista, que atualmente o usuário interessado em acompanhar  processos jurídicos se depara com a falta de informações realcionadas à estes. Dessa forma, o projeto busca desenvolver uma aplicação web que contenha dados quanto aos procedimentos dos processos e o  progresso desses 

Assim, neste documento serão abordadas as definições de persona, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto utilizando técnicas de obtenção de dados, como questionários online, para compreender de forma específica nosso usuário e suas necessidades. 

## Personas

1 - Advogado - Aquele que acompanha o caso. Precisa de informações e acessos as atualizações do processo.
Exemplo: João Carlos é advogado e está acompanhando o processo de Luiz Mendes, que está sendo acusado de não pagar a pensão alimentícia dos filhos. Luiz Mendes não possui computador em casa, por isso João Carlos que acessa todas as informações e, posteriormente, entra em contato com Luiz pelo telefone e passa as atualizações.
Para tanto, o advogado irá precisar acessar essas informações. Provavelmente por meio de um código de acesso que apenas o advogado tem acesso.

2 – Réu – Aquele que é o mais interessado no andamento do processo. É a figura principal. Precisa ter o acesso para saber o andamento do seu processo.
Exemplo: Luiz Mendes está sendo processado pela ex-esposa por não pagar pensão alimentícia para os filhos. Com isso, possui um código de acesso para acompanhar o andamento do seu processo, inclusive para saber quando e se precisará ir até o Fórum ou entregar alguma documentação complementar.

3 – Assessor/Juiz – Aqueles que precisam ter acesso integral ao processo para saber o andamento para fins judiciais, para a tomada de decisões bem como o histórico de todo o processo.
Exemplo: Tadeu Farias é assessor do juiz Júlio. Com isso, precisa ter acesso a todo o histórico e atualizações do processo para deixa o juiz informado. Bem como analisar eventuais contratempos e saber exatamente em que momento deverá ter a interferência do juiz.

4 – Familiar/ Terceiro – Aqueles que não possuem vínculo no processo, mas que de alguma forma precisam ter informações. Ocorre no caso que o réu esteja incapacitado de acompanhar o processo, e com isso, passar as informações para o réu.
Exemplo: Maria é irmã de Luiz Mendes, que é réu do processo. Como Luiz Mendes se encontra aprisionado, Maria que acompanha todas as atualizações do processo.

5 –Desenvolvedores – São aqueles que conseguem fazer melhorias nos sistemas para que ocorra a evolução e manutenção do mesmo.
Exemplo: José é desenvolvedor de sistemas e presta suporte para o sistema UTI PROCESSUAL. Com isso, precisa ter acesso as funcionalidades para realizar as atividades.

6 – Digitador ou similar – Aquele que incluir, altera e modifita os processos conforma as atualizações.Exemplo: Mariana é a pessoa responsável por incluir os processos e manter os mesmos atualizados.


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

Advogados

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
