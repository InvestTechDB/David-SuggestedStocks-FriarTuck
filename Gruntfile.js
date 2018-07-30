module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            build: {
                src: 'client/dist/styles.css',
                dest: 'client/dist/styles.min.css'
            }
        },
        concat: {
            options: {
                separator: '\n/*next file*/\n\n'
            },
            dist: {
                src: ['client/dist/bundle.js'],
                dest: 'client/dist/built.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'client/dist/built.min.js' : ['client/dist/built.js']
                }
            }
        },
        rcs: {
            options: {},
            css: {
                options: {
                    replaceCss: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'client/dist',
                        src: 'client/dist/styles.min.css',
                        dest: 'client/dist/dist1'
                    }
                ]
                },
                all: {
                    files: [
                        {
                            expand: true,
                            cwd: 'client/dist',
                            src: ['client/dist/built.min.js', 'client/dist/index.html'],
                            dest: 'client/dist/dist1'
                        }
                    ]
                }
            }
    });
    


    grunt.registerTask('default', ['cssmin']);
    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('rename', ['rcs']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-rcs');

}