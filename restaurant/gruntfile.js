module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                src: ['src/js/jquery-1.9.1.min.js',
                        'src/js/flickity.pkgd.min.js', 
                        'src/js/jquery.simplePagination.js',
                        'src/js/script.js'],
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
                        src: ['*.{jpg,jpeg,png,gif}'],
                        dest: 'dist/img/',
                    }
                ]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/style',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            main: {
                expand: true,
                flatten: true,
                src: 'dist/css/styles.css',
                dest: 'src/style/'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/compiled-style.min.css': ['src/style/*.css']
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
            autoprefixer: {
                files: ['src/style/styles.css'],
                tasks: ['autoprefixer'],
            },
            cssmin: {
                files: ['src/style/*.css'],
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
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['imagemin', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'watch']);

};