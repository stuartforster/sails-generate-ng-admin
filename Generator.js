/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');


/**
 * sails-generate-ng-admin
 *
 * Usage:
 * `sails generate ng-admin`
 *
 * @description Generates a ng-admin
 * @help See http://links.sailsjs.org/docs/generators
 */

var path = require('path');

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

  before: function (scope, cb) {

//    // We're going to replace the underscore template tags, so that we can generate a templated template.
//    // First, remember the old settings to be able to restore them.
//    var _escape = _.templateSettings.escape,
//    _interpolate = _.templateSettings.interpolate,
//    _evaluate = _.templateSettings.evaluate;
//    // Then replace the tags
//    _.templateSettings.escape = /<@-([\s\S]+?)@>/g;
//    _.templateSettings.evaluate = /<@([\s\S]+?)@>/g;
//    _.templateSettings.interpolate = /<@=([\s\S]+?)@>/g;


//    // scope.rootPath is the base path for this generator
//    //
//    // e.g. if this generator specified the target:
//    // './Foobar.md': { copy: 'Foobar.md' }
//    //
//    // And someone ran this generator from `/Users/dbowie/sailsStuff`,
//    // then `/Users/dbowie/sailsStuff/Foobar.md` would be created.
//    if (!scope.rootPath) {
//      return cb( INVALID_SCOPE_VARIABLE('rootPath') );
//    }
//
//    // Read the app name from the sails app's package.json
//    scope.appName = require(path.resolve(scope.rootPath, 'package.json')).name || 'Admin';



    // When finished, we trigger a callback with no error
    // to begin generating files/folders as specified by
    // the `targets` below.
    cb();

//    // Then we restore the old template settings, in case we're part of a generator chain
//    _.templateSettings.escape = _escape;
//    _.templateSettings.interpolate = _interpolate;
//    _.templateSettings.evaluate = _evaluate;

  },



  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {

    // Create files relative to `scope.rootPath`
    // (You can name files dynamically, accessing scope variables using :variable_name).


    // The angular and ng-admin files into a subdirectory of 'assets':
    './assets/ng-admin/js/angular.min.js': { copy: '../node_modules/angular/angular.min.js' },
    './assets/ng-admin/js/angular.min.js.map': { copy: '../node_modules/angular/angular.min.js.map' },
    './assets/ng-admin/js/ng-admin.min.js': { copy: '../node_modules/ng-admin/build/ng-admin.min.js' },
    './assets/ng-admin/js/ng-admin.min.map': { copy: '../node_modules/ng-admin/build/ng-admin.min.map' },
    './assets/ng-admin/css/ng-admin.min.css': { copy: '../node_modules/ng-admin/build/ng-admin.min.css' },
    // Fontawesome fonts
    './assets/ng-admin/assets/fontawesome-webfont.eot': { copy: '../node_modules/ng-admin/assets/fonts/fontawesome-webfont.eot'},
    './assets/ng-admin/assets/fontawesome-webfont.svg': { copy: '../node_modules/ng-admin/assets/fonts/fontawesome-webfont.svg'},
    './assets/ng-admin/assets/fontawesome-webfont.ttf': { copy: '../node_modules/ng-admin/assets/fonts/fontawesome-webfont.ttf'},
    './assets/ng-admin/assets/fontawesome-webfont.woff': { copy: '../node_modules/ng-admin/assets/fonts/fontawesome-webfont.woff'},
    // Bootstrap glyphicons
    './assets/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.woff': { copy: '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff' },
    './assets/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf': { copy: '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf' },
    './assets/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.svg': { copy: '../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg' },

    // The `template` helper reads the specified template, making the
    // entire scope available to it (uses underscore/JST/ejs syntax).
    // Then the file is copied into the specified destination (on the left).
    './views/ng-admin.ejs': { copy: 'views/index.ejs' },

    // Copy default config file
    './config/ng-admin.js': { copy: 'config/ng-admin.js' },

    './api/controllers/NgAdminController.js': { copy: 'controllers/NgAdminController.js' }

  },

  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * @type {String}
   */
  templatesDirectory: require('path').resolve(__dirname, './templates')
};





/**
 * INVALID_SCOPE_VARIABLE()
 *
 * Helper method to put together a nice error about a missing or invalid
 * scope variable. We should always validate any required scope variables
 * to avoid inadvertently smashing someone's filesystem.
 *
 * @param {String} varname [the name of the missing/invalid scope variable]
 * @param {String} details [optional - additional details to display on the console]
 * @param {String} message [optional - override for the default message]
 * @return {Error}
 * @api private
 */

function INVALID_SCOPE_VARIABLE (varname, details, message) {
  var DEFAULT_MESSAGE =
  'Issue encountered in generator "ng-admin":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-ng-admin`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
