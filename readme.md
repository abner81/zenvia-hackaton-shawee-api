# Funcionalidades
  - [] Fluxos diferentes para diversas categorias no zenvia flow
  - [x] Endpoint: /find/category para filtrar a categoria interna do usuário, e decidir qual o próximo fluxo
    - [x] Recebe o número de telefone e retorna a categoria pertencente, ou se não houver, retorna null
  - [] Endpoint: /gamification/populate => recebe name da gamificacao, quantos pontos vale, id da compania e a qual internal_category pertence esse gamificação
  - [] Endpoint: /send/whatsapp/csv => recebe arquivo .csv, transforma em json e envia as mensagens em background jobs (redis e bull)
  - [] Endpoint (get): /dashboard/:id => recebe o id do profissional e envia informações do dashboard para o front 