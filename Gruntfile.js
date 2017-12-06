// module.exports = function (grunt) {

//           grunt.initConfig({
//               pkg: grunt.file.readJSON('package.json'),
//               //compile typescript to javascript
//               ts: {
//                   default: {
//                       src: ["app/**/*.ts", "!node_modules/**"],
//                       dest: 'app/js',
//                       watch: "."

//                   }
//               },
//               eslint: {
//                 target: ['app/js/*.js'],
//                 "extends": "eslint:all"
//               },
//               watch: {
//                   files: ['app/ts/*.ts'],
//                   tasks: ['ts'],
//                   options: {
//                       spawn: false // to make the watch task faster
//                   }
//               }
//           });

//           //load tasks
//           grunt.loadNpmTasks('grunt-ts');
//           grunt.loadNpmTasks('grunt-eslint');
//           grunt.loadNpmTasks('grunt-contrib-watch');

//           //register tasks
//           grunt.registerTask('default', ['clean', 'ts', 'eslint', 'watch']);

//       };
