module.exports = {

  /*
   * Define the directories for builds and
   * compiled sources.
   */
  build_dir: 'build',
  compile_dir: 'bin',


  /*
   * Here you can influence the order of javascript files.
   *
   * We need to load all *.module.js files first, that all
   * other files and we want to exclude *.spec.js files and javascript
   * in the assets folder.
   *
   * Also coffeescript files, your main html file and your main
   * less and sass file must be defined here.
   */
  app_files: {
    js: [ 'src/**/*.module.js', 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],
    
    coffee: [ 'src/**/*.module.coffee', 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],

    less: 'src/less/main.less',
    sass: 'src/sass/main.scss'
  },


  /*
   * Define files for tests.
   */
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },


  /*
   * All js and css files get minified and combined when compiling.
   *
   * Files in js_originals and css_originals get just copied and you can
   * use them in your project.
   *
   * Also assets simply get copied.
   *
   * Note, that when watching, files don't get compiled
   * and every file is a single include. You have
   * to compile to optimize everything.
   */
  vendor_files: {
    js: [
      'vendor/es5-shim/es5-shim.min.js',
      'vendor/es5-shim/es5-sham.min.js',
      'vendor/angular/angular.min.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.min.js',
      'vendor/angular-resource/angular-resource.min.js',
      'vendor/angular-animate/angular-animate.min.js'
    ],
    js_originals: [
      'vendor/html5shiv/dist/html5shiv.min.js',
    ],
    css: [
      'vendor/bootstrap/dist/css/bootstrap.min.css',
      'vendor/animate-css/animate.min.css'
    ],
    css_originals: [
    ],
    assets: [
    ]
  },

};
