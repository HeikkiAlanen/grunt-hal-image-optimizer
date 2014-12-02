/*
 * grunt-hal-image-optimizer
 * https://github.com/HeikkiAlanen/grunt-hal-image-optimizer
 *
 * Copyright (c) 2014 Heikki Alanen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
        all: [
            'Gruntfile.js',
            'tasks/*.js',
            '<%= nodeunit.tests %>'
        ],
        options: {
            jshintrc: '.jshintrc'
        }
    },
    
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['./imgTest']
    },

    copy: {
      files: {
        expand: true,
        src: ['./node_modules/hal-image-optimizer/test/test_images/*'],
        dest: './imgTest',
        flatten: true,
        filter: 'isFile'
      }
    },

    // Configuration to be run (and then tested).
    hal_image_optimizer: {
      tests1: {
        options: {
            source: './imgTest'
        },
        src: ['./imgTest']
      },
      tests2: {
        options: {
            source: './imgTest',
            target: './imgThumbs'
        },
        src: ['./imgTest']
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  //grunt.registerTask('test', ['clean', 'hal_image_optimizer', 'nodeunit']);
  grunt.registerTask('test', ['clean', 'copy', 'hal_image_optimizer']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
  //grunt.registerTask('default', ['test']);

};
