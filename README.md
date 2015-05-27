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
$ npm start
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

> Note that you should not define an explicit version like ```1.3.5```, but define it with a tilde ```~1.3.5```. This will match the latest minor version ```1.3.x```. When using a caret ```^1.3.5``` the latest major version will be used: ```1.x.x```.

##### build.config.json

This file you may need to change in the future. It contains configuration of the file include order and which vendor packages to use. This will be covered in the **Configuration** section.

##### Gruntfile.js

All automated tasks when building/watching/compiling your code, are configured in this file. You may *not* need to change this file.

##### karma.config.js

This package supports unit testing with [karma](http://karma-runner.github.io/) out of the box. This file defines some configuration and the files and file order to be included in tests.

##### module.prefix / module.suffix

Every module is wrapped within a self-executing function by default to prevent global namespace pollution.

##### package.json

The package configuration and node modules are defined here. Again all modules should go into the ```devDependencies``` section and you can use ```npm install <module-name> --save-dev``` like with bower.

Also the version definition with tilde and caret applies here.

##### server.js

This is a very simple web-server to run and test the client application. You may define additional routes here for testing, but never use this server in a production environment.

To run the server simply type ```node server.js``` in your command line.

##### start.js

This is just a simple file that enables you to use the alias ```npm start``` to start the server. This is basically the same than running ```node server.js```.

### Configuration

### Libraries

### Angular

#### Style Guide

### CSS

#### LESS & SASS

#### Animations

### Grunt

#### Build vs. Compile

### Testing
