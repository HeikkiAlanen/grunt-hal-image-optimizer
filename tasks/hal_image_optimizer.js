/*
 * grunt-hal-image-optimizer
 * https://github.com/Heikki/grunt-hal-image-optimizer
 *
 * Copyright (c) 2014 Heikki Alanen
 * Licensed under the MIT license.
 */

'use strict';

var imgOpt = require('hal-image-optimizer');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('hal_image_optimizer', 'Simple application to optimize images for web usage.', function() {
  
    var done = this.async();
  
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });
    
    var value = imgOpt(options).then(
      function(image) {
        done();
      },
      function(err) {
        console.log(err);
        done();
      }
    );
  });
};
