module.exports = function(grunt) {
    var pkg = grunt.file.readJSON("package.json");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
        },
        jshint: {
          options:{
            jshintrc: ".jshintrc",
            ignores: [
                "test/**/*.*",
                "node_modules/**/*.*"
            ],
            reporter: require("jshint-stylish")
          },
          all: [ "src/**/src/**/*.js", "src/*/*.js" ]
        },
        mochaTest: {
          test: {
            options: {
              reporter: "spec"
            },
            src: [ "test/**/*.spec.js" ]
          }
        },
        exec: {
          zipFile: "./package"
        }
    });
    
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-exec");
    grunt.registerTask("test", "Executes test", ["jshint", "mochaTest"]);
    grunt.registerTask("default", ["test", "exec"]);
}