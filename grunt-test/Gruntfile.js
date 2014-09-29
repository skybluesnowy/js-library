module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/boo.js',
        dest: 'build/boo.min.js'
      }
    },
    less: {
    // development: {
         //options: {
           //  paths: ["assets/css"]
         //},
         //files: {"path/to/result.css": "path/to/source.less"}
     //},
     production: {
         options: {
             paths: ["css"],
             cleancss: true
         },
         files: {"build/boo.css": "src/boo.less"}
     },
     watch: {
      files: ['src/*.less'],
      tasks: ['less']
    }
 }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less']);

};