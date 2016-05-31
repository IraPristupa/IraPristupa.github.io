module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/dropzone.js', 'src/js/script.js'],
        dest: 'dist/js/script.js'
      }
    },
    uglify: {
      dist: {
        src: ['dist/js/script.js'],
        dest: 'dist/js/script.min.js'
      }
    },
    imagemin: {
      static: {
        options: {
          progressive: true,
          interlaced: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/img/',
            src: ['*.{jpg,png,gif}'],
            dest: 'dist/img/',
          }
        ]
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css']
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['src/css/*.scss'],
        tasks: ['sass'],
      },
      scripts: {
        files: ['src/js/*.js', 'dist/js/script.js' ],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        }
      },
      cssmin: {
        files: ['dist/css/*.css'],
        tasks: ['cssmin'],
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  grunt.registerTask('default', ['concat', 'imagemin', 'cssmin', 'uglify', 'sass', 'watch']);

};