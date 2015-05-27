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

## Configuration

## Learn

### Libraries

### Angular

#### Style Guide

### CSS

#### LESS & SASS

#### Animations

### Grunt

#### Build vs. Compile

### Testing
