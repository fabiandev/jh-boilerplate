# JH Angular Boilerplate

A guide to kickstart your next project.

This package is based on [ngbp](http://joshdmiller.github.com/ng-boilerplate).

## Requirements

- [Node.js](https://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/en/)
- [SASS](http://sass-lang.com/)
- [grunt-cli](https://github.com/gruntjs/grunt-cli)
- [bower](http://bower.io/)
- [karma](http://karma-runner.github.io/)

## Quick Start

Install Node.js and Ruby and clone this repository:

```sh
$ git clone git://github.com/fabianweb/jh-boilerplate
$ cd jh-boilerplate
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt build
$ node server.js
```

Now you should be able to view the cloned project in your browser on `http://localhost:4567`

# Documentation

This section is a step-by-step guide on how to install, configure and use JH Boilerplate. You will get to know all things you need to know before start using this package.

## Installation

##### 1. Node.js

Visit [nodejs.org](https://nodejs.org/) and install the latest version. Node comes already bundled with npm, which you will need later.

##### 2. Ruby

Go to [ruby-lang.org](https://www.ruby-lang.org) and install Ruby. If you're on Windows, you can grab the installer [here](https://www.ruby-lang.org/en/documentation/installation/#rubyinstaller). If you're on a Mac, Ruby may already be installed. Check with ```ruby --version```.

##### 3. SASS

Check if SASS is already installed with ```sass --version``` and install it otherwise. As you already have Ruby, this is as simple as running ```gem install sass```.

##### 4. Git

If you're on Windows, you have to [Git for Windows](https://msysgit.github.io/), which includes the Git bash.

Restart your PC at this point to make sure, that all environment variables are available.

##### 5. Clone

You can now clone this repository. Remember, if you're on Windows, use the Git bash for this command:

```sh
$ git clone git://github.com/fabianweb/jh-boilerplate.git
```

##### 6. Grunt, Karma, Bower

Change into the cloned project and install [Grunt](http://gruntjs.com/), [Karma](http://karma-runner.github.io/) and [Bower](http://bower.io/) via npm:

```sh
$ npm -g install grunt-cli karma bower
```

The ```-g``` flag tells npm, to install the packages globally, so you can run them from anywhere.
If you're wondering what they are good for, we'll cover that later!

##### 7. Dependencies

You can now install all dependiencies for your development workflow:

```sh
$ npm install
$ bower install
```

If you're on a Mac and you are getting error messages, you may try using ```sudo``` to run the commands.
Instead of running as an administrator, try to set access rights properly.

If you are still having problems with ```sudo bower install```, use this command instead:

```sh
$ sudo bower install --allow-root
```

## Learn

In this chapter you will get to know how to use this package.

### Structure

```
jh-boilerplate/
  |- node_modules/
  |  |- <npm modules>
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- less/
  |  |  |- main.less
  |  |- sass
  |  |  |- main.scss
  |  |- config.js
  |  |- helpers.js
  |  |- index.html
  |- vendor/
  |  |- <bower modules>
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- Gruntfile.js
  |- karma.config.js
  |- module.prefix
  |- module.suffix
  |- package.json
  |- server.js
  |- start.js
```

Below you can find short explanations to every important directory and file listed above.

##### node_modules/

Every module you install with ```npm install <module-name>``` will be saved here, unless you include the ```-g``` flag.
Node modules are used for grunt tasks at the moment, but could also be included in the application.

##### src/

This is the place where you will be developing your app, so all templates, javascript files, stylesheets, etc. will go here.

##### vendor/

All packages installed with ```bower install <module-name>``` will be placed inside this directory.

##### .bowerrc

This file simply configures the folder, where to place bower modules (in our case ```vendor/```), and where the configuration file is placed. This is pre-configured, so you won't have to change it.

##### bower.json

All bower modules that have been installed, should be present in the ```devDependencies``` section, with their version.
To do this automatically when installing a module via the command line, use ```bower install <module-name> --save-dev```

> Note that you should not define an explicit version like ```1.3.5```, but define it with a tilde ```~1.3.5```. This will match ```1.3.x```. When using a caret ```^1.3.5``` the the following rule applies: ```1.x.x```.

##### build.config.json

This file you may need to change in the future. It contains configuration of the file include order and which vendor packages to use. This will be covered in the **Configuration** section.

##### Gruntfile.js

All automated tasks when building/watching/compiling your code, are configured in this file. You may *not* need to change this file.

##### karma.config.js

This package supports unit testing with [karma](http://karma-runner.github.io/) out of the box. This file defines some configuration and the files and file order to be included in tests.

##### module.prefix / module.suffix

The entire application (without vendor) is wrapped within a self-executing function by default to prevent global namespace pollution.

##### package.json

The package configuration and node modules are defined here. Again all modules should go into the ```devDependencies``` section and you can use ```npm install <module-name> --save-dev``` like with bower.

Also the version definition with tilde and caret applies here.

##### server.js

This is a very simple web-server to run and test the client application. You may define additional routes here for testing, but never use this server in a production environment.

To run the server simply type ```node server.js``` in your command line.

##### start.js

This is just a simple file that enables you to use the alias ```npm start``` to start the server. This is basically the same than running ```node server.js```.

### Configuration

As mentioned before, ```build.config.js``` is the file, where your build configuration goes to.

> Do *not* modify anything in app_files, as this is pre-configured for the application structure unless you really know what you do and you may also have to change parts of ```Gruntfile.js```.

What you do need to modify regularly, is the ```vendor_files``` section:

- In the ```js``` Array, you define the exact location of each vendor javascript file you want to use in your application.
- The ```js_originals``` Array should be used for vendor files you want to include in your project, but should not be minified and combined with other files, so you can reference the file alone.
- In ```css`` All vendor stylesheet file locations are defined. Note that you can't use SASS or Less here. Those must be included in your main pre-processor files and is covered later.
- ```css_originals``` is the ```js_originals``` for CSS. Yup!
- In ```assets``` you can define any file, which should be included in your build, and will be placed in the - guess what - ```assets\``` directory.

### Libraries

As you could spot in ```build.config.js```, there are several libraries included by default, you may exchange, remove or extend:

- [Bootstrap](http://getbootstrap.com/): An awesome CSS Framework, which makes life so much easier.
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/): A well known icon font that's free to use. It's not included in ```build.config.js``` but loaded from a CDN and placed in ```src\index.html``` (covered later).
- [AngularJS](https://www.angularjs.org/): Of course Angular is included, as our apps **are** Angular apps.
- [UI Bootstrap](http://angular-ui.github.io/bootstrap/): A 3rd party Angular module, that includes all Bootstrap specific JavaScript without using jQuery, so you don't have to use it. Yay! (... and you should't use it with Angular - almost always)
- [UI Router](http://angular-ui.github.io/ui-router/): A 3rd party Angular module to use instead of the default AngularJS router, which is based on states and supports nested views and routing.
- [ngResource](https://docs.angularjs.org/api/ngResource): An Angular module to handle REST resources.
- [ngAnimate](https://docs.angularjs.org/api/ngAnimate): An Angular Module, that adds a class to transitioning elements for you to add animations or other logic linked to those states.
- [Animate.css](https://github.com/daneden/animate.css): A CSS animation library you can use with ngAnimate (covered later).
- [ES5 Shim](https://github.com/es-shims/es5-shim): Tries to make non ES5 compatible Browser, ES5 compatible
- [HTML5 Shiv](https://github.com/afarkas/html5shiv): Tries to introduce HTML5 elements to non-HTML5 Browser.

### The App

As mentioned before, your application code lives in ```src\```:

- The index.html file template is located in ```src\index.html```
- Routes and default values are places in ```src\config.js```
- Global helper function, that may be used *anywhere* should be placed in ```src\helpers.js```

For now, just visit ```src\config.js``` and edit the ```__mainConfig.config``` for something that suits you.

#### Angular

You should be familiar with at least the basics of Angular and understand it's modular structure. This boilerplate makes heavy use of it, and was built with the intention of creating a small module for every application part or logic.

> The app structure was primarily influenced by this [opinionated styleguide](https://github.com/johnpapa/angular-styleguide). You should take a look at it, however, I did not apply every pattern. E.g. we will use ```$scope``` instead of ```this```.

#### Introduction

All reusable modules you write, should be placed in ```src\common```. Those modules should be compatible with **any** project, and should not contain any application specific logic. An example would be a module that can connect to the twitter API and return data.

The application modules will be saved in ```src\app```.

#### Modules

An module should always consist of the following files, where "name" should be replaced with the module name:

- ```name.module.js```: This file declares the module, and all it's dependency modules.

```js
(function() {
	'use strict';

	angular.module( 'name', [
		'dependency1',
		'dependency2'
	]);

})();
```

- ```name.config.js```: Before the application starts, you can configure various things like providers in this file.

```js
(function() {
	'use strict';

	angular.module( 'name' )
		.config( config );

	config.$inject = [ 'someServiceProvider' ];

	function config ( someServiceProvider ) {

	}

})();
```

> Note that providers have to be suffixed with "Provider" in the configuration phase. So if your Provider is called ```someService```, you would inject it with ```someServiceProvider```.
> **This is exclusively true for Providers and the configuration phase.**

- ```name.run.js```: After the configuration phase, the "run" parts of your application will be triggered.

```js
(function() {
	'use strict';

	angular
		.module( 'app' )
		.run( run );

	run.$inject = [ 'someService' ];

	function run( someService ) {

	}

})();
```

> Note that you are now injecting the ```someService``` Provider without the "Provider" suffix.

##### Optional Module Files

- ```name.controller.js```: If the module needs a controller, create a file for that!

```js
(function() {
	'use strict';

	angular.module( 'name' )
		.controller( 'NameController', AppController );


	AppController.$inject = [ '$scope', '$state', '$location' ];

	function AppController ( $scope, $state, $location ) {

	}

})();
```

- ```some.factory.js```: For every factory, create a new file. "some" should be replaced with an exprissive description what it does.
- ```some.provider.js```: For every provider, create a new file.
- ```some.service.js```: For every service, create a new file.

> If a module has (a) submodule(s), create (a) folder(s) for that, and define it as a dependency in the parent ```name.module.js``` file.

##### The App Module

The application ```src\app``` itself is a module, that defines sub-modules as dependency in ```app.module.js```. Those submodules may again have submodules and so on...

#### Templates

If a module has templates, create a folder ```templates``` and name them like ```some-template.tpl.html```.

#### The Router

You already glanced at ```src\config.js``` and set some basic configuration.

At this stage, I want to refer to the [UI Router wiki](https://github.com/angular-ui/ui-router/wiki) which covers all possibilities of the package.

Assuming you are now familiar with UI Router states, substates views and subviews you know, that you create href's like this:

```html
<a data-ui-sref="home" title="Home">
  Home
</a>
```

> Note that you should use the ```data-``` prefix on **any** Angular directive, to produce valid HTML5 documents.

As we're using JH Boilerplate with our CMS, we want to ask, if not defined states, are defined there. In that case, you would add a href *and* the ui-sref with the exact same value:

```html
<a href="/some/link" data-ui-sref="/some/link" title="Go to Some Link">
  Just a test link
</a>
```

The server would respond if it could find a Node for that URL and the type of the Node, so for every type it could returned there must be a template set in ```src\config.js``` within ```__mainConfig.stateTemplates```.

Those "generic" templates and controllers live in their own module name... "generic".

#### LESS & SASS

Your main SASS and Less files are located at ```src\sass\main.scss``` and ```src\less\main.less```. Those files must exists and are compiled. You may include any other pre-processor file.

#### Animations

If you take a look at ```sass\partials\_animations.scss``` you can see an example usage of ngAnimate with Animate.css.

Please take a look at the [ngAnimate documentation](https://code.angularjs.org/1.3.15/docs/api/ngAnimate) for it's behavior and the [Animate.css documentation](https://github.com/daneden/animate.css) for available animations.

### Grunt

We covered a lot, but now we want to see something in the browser. Alright, make sure you're in the ```jh-boilerplate``` directory and type the following command:

```sh
$ grunt watch
```

This will create a folder ```\build``` and watches your files, so if you make any changes, it will automatically rebuild.

Now open a new command line window, change to the jh-boilerplate directory and type:

```sh
$ node server.js
```

This starts the test server and you should now be able to view the boilerplate in your browser at ```http://localhost:4567```.

> JH Boilerplate supports live reload! So grab the [Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) and you don't need to manually reload any more.

If anything is not showing up as expected, it may help to stop watching with ```Ctrl+C``` and run ```grunt watch``` again.

#### Build vs. Compile

We already know how to watch files, but you can simply rebuild without watching with this command:

```sh
$ grunt build
```

If you build, nothing gets minified or combined, so it's easy to debug. For production you should compile your application, to create a single JavaScript and CSS file:

```sh
$ grunt compile
```

You may also simply type ```grunt```, an alias for the extremely long command ```grunt compile```.

> The compiled version of your application is placed in a newly created ```\bin``` directory. To test it with our small server you can do so by starting it with ```node server.js --dir bin```.

When compiling, your application version is increased, so if it was ```0.0.4``` it will then be ```0.0.5```. You could also increase the version manually by typing ```grunt bump```.

If you whish to increase the minor or major version number, do it like this, assuming the current version is ```0.0.4```:

```sh
$ grunt bump
>> Version bumped to 0.0.5

$ grunt bump:minor
>> Version bumped to 0.1.0

$ grunt bump:major
>> Version bumped to 1.0.0
```

### Testing

You may include karma unit test files. E.g. Those files are named like ```name.spec.js```

You can then optionally run unit test:

```sh
$ grunt watch --with-tests
$ grunt build --with-tests
$ grunt compile --with-tests
```

