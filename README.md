# sails-generate-ng-admin

Generates an admin interface for your [Sails](http://sailsjs.org) app's models, to make it easier to populate your
database while your app is in development.  It does this by leveraging the existing scaffolded API which is part of
Sails, and the [ng-admin](https://github.com/marmelab/ng-admin) Angular app.


### Installation

`npm install git://github.com/zvesp/sails-generate-ng-admin`

### Usage

1. In the base of your Sails app, run: `sails generate ng-admin`. 

1. Add a route to your sails app, say `'get /admin': 'NgAdminController.index'` to your `config/routes.js`.  You can
replace "`admin`" with something else if you prefer.

1. Lift your app, and visit the URL corresponding to the route you just created ([here perhaps](http://127.0.0.1:1337/admin)).

1. If you changes to your models, you don't need to re-generate the admin interface, simply re-lift your app and refresh the page.

1. Customise which models and which fields are displayed where by editing `config/ng-admin.js`, which is well-commented.

### License

**[MIT](./LICENSE)**
(c) 2015 Jonathan Zvesper
