Package.describe({
  name: 'shmck:angular2-router',
  version: '2.0.3',
  summary: 'Angular 2 Router packaged for Meteor. Alpha-35.',
  git: 'https://github.com/ShMcK/meteor-angular2-router',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['lib/router.dev.js'], 'client');
});
