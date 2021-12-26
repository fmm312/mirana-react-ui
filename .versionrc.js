module.exports = {
    bumpFiles: [
      {
        filename: 'package.json',
      },
    ],
    types: [
      {type: 'feat', section: '🚀 Novidades'},
      {type: 'fix', section: '🐞 Correções de Bugs'},
      {type: 'docs', section: '📜 Documentação'},
      {type: 'refactor', section: '💪 Refatorações'},
      {type: 'chore', section: 'Outros'},
      {type: 'style', hidden: true},
      {type: 'perf', hidden: true},
      {type: 'test', hidden: true}
    ]
  };