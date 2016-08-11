module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        src: ['src/js/script.js'],
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
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/styles.min.css': ['dist/css/styles.css']
        }
      }
    },
    watch: {
      sass: {
        files: ['src/css/*.scss'],
        tasks: ['sass'],
      },
      scripts: {
        files: ['src/js/*.js', 'dist/js/script.js' ],
        tasks: ['uglify'],
        options: {
            spawn: false,
        }
      },
      cssmin: {
        files: ['dist/css/*.css'],
        tasks: ['cssmin'],
      },
      imagemin: {
        files: ['src/img/*.{jpg,png,gif}'],
        tasks: ['imagemin'],
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  grunt.registerTask('default', ['imagemin', 'cssmin', 'uglify', 'sass', 'watch']);

};