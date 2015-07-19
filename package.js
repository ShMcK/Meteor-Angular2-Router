Package.describe({
  name: 'shmck:angular2-router',
  version: '2.0.0-alpha.31',
  summary: 'The latest version of the angular 2 router',
  git: 'https://github.com/ShMcK/meteor-angular2-router',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/router@alpha.31.js');
});
