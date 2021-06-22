const docs = require('./index.js')('subheaven-docs');

docs.function('function', 'Declara um função.')
    .param('name', 'Nome da função.')
    .param('description', 'Descrição da função.');
docs.function('param', 'Informa um parâmetro da função.')
    .param('name', 'Nome do parâmetro.')
    .param('description', 'Descrição do parâmetro.');
docs.function('help', 'Mostra um resumo da documentação do módulo.');
(async() => {
    await docs.help();
})();