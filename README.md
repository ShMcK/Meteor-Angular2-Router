# shmck:angular2-router

Angular 2 Router package for Meteor. 

##### Version: alpha-31
*NOTE: Use the same version of the router as Angular 2*

## Installation

    meteor add shmck:angular2-router
    
In your index.html, set up system.js.

List of imports:

    import { LocationStrategy,
             HTML5LocationStrategy,
             Router,
             RootRouter,
             RouterOutlet,
             RouterLink,
             RouteRegistry,
             Pipeline,
             Location,
             bind,
             routerDirectives,
             routerInjectables } from 'angular2/router';
