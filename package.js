Package.describe({
  name: 'shmck:angular2-router',
  version: '2.0.0-alpha.31-1',
  summary: 'Angular 2 Router packaged for Meteor. Alpha-31.',
  git: 'https://github.com/ShMcK/meteor-angular2-router',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('shmck:angular2@2.0.0-alpha.31');
  api.addFiles(['lib/router@alpha.31.js'], 'client');
});
