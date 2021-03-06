[![Build Status](https://travis-ci.org/HeikkiAlanen/grunt-hal-image-optimizer.svg)](https://travis-ci.org/HeikkiAlanen/grunt-hal-image-optimizer)

# grunt-hal-image-optimizer

> Simple plugin to optimize images for web usage.

## Getting Started
This plugin requires Grunt `~0.4.5`

```shell
npm install grunt-hal-image-optimizer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-hal-image-optimizer');
```

## The "hal_image_optimizer" task

### Overview
Following example optimizes images from the test folder and places thumbnail images to the given destination folder.

```js
grunt.initConfig({
    hal_image_optimizer: {
      example: {
        options: {
            width: 200,
            height: 200
        },
        files: {'./imgThumbs': './node_modules/hal-image-optimizer/test/test_images' }
      }
    }
});
```

### Options

#### options.width
Type: `Integer`
Default value: `100`

Width of the generated image.

#### options.heigth
Type: `Integer`
Default value: `100`

Heigth of the generated image.

#### files
The path to the destination (key), the path to the source files. 

## Release History
###v1.0.1:
* Corrected usage of source and destination.

###v1.0.0:
* First version.

## License

Copyright (c) [HeikkiAlanen](https://github.com/HeikkiAlanen)

Licensed under the [MIT license](LICENSE-MIT).