module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
            files: [{
                expand: true,
                cwd: 'src/js/',
                src: '*.js',
                dest: 'build/js',
                ext: '.min.js'
          }]
      }
    },

    less: {
      development: {
        options: {
        },
        files: {
          "src/css/authentication.css": "src/less/authentication.less",
          "src/css/dragong_area.css": "src/less/dragong_area.less",
        }
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 9', 'Android > 0', 'bb > 0', 'Chrome > 0', 'Firefox > 0', 'Explorer > 0', 'iOS > 0', 'Opera > 0', 'Safari > 0', 'OperaMobile > 0', 'OperaMini > 0', 'ChromeAndroid > 0', 'FirefoxAndroid > 0', 'ExplorerMobile > 0'] 
      },
      your_target: {
        files: {
          "src/css/authentication.css": "src/css/authentication.css",
          "src/css/dragong_area.css": "src/css/dragong_area.css",
        } 
      },
    },

    cssmin: {
      target: {
        files: {
          "build/css/authentication.min.css": "src/css/authentication.css",
          "build/css/dragong_area.min.css": "src/css/dragong_area.css"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less', 'autoprefixer', 'cssmin']);

};