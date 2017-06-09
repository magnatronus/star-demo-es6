# star-demo-es6

<table>
<tr>
  <td><img src="https://github.com/magnatronus/star-demo-es6/blob/master/images/sim001.png" width="200"></td>
  <td><img src="https://github.com/magnatronus/star-demo-es6/blob/master/images/sim002.png" width="200"></td>
  <td><img src="https://github.com/magnatronus/star-demo-es6/blob/master/images/sim003.png" width="200"></td>
  <td><img src="https://github.com/magnatronus/star-demo-es6/blob/master/images/sim005.png" width="200"></td>
</tr>
</table>

## Introduction
This is a test/demo Titanium project designed to run on iOS and Android and based on the free Star Wars API (SWAPI). The App is written in Titanium using ES6, Promises and a custom framework I have called Erbium.

I am looking at using ES6 for Titanium development and really needed the focus of a tangible app to do anything meaningful. As I also wanted to put Promises into the app, I searched the internet and found this excellent article by Adam Paxton on Promises in Titanium (http://adampaxton.com/using-javascript-promises-in-appcelerator-titanium/).  Which gave me some great info and the idea to base my investigations around the same API.

## What is here
I have include all the source code (which resides under the src dir)  except for the code in the src/system directory, the reason for this is that it is still VERY much WIP, and a bit untidy. Bt the files that current sit in src/system are:

* backbone.js - used at the moment for my Global Event Dispatcher
* underscore.js -  included as backbone needs it (this is excluded from the babel transpile as it screws it up)
* promises.core.min.js - the bluebird core lib  (as detailed in Adam's article)
* erbium.js  - my 'untidy' code with a basic way of launching an app, the Global Dispatcher and a simple base Component class

## Build overview
I have various npm scripts in the package.json that I am experimenting with, but basically my current build steps are:

* npm run copy-assets  (only when they change)
* npm run build-app  ( this transpiles into the Resources dir)

then I use the command line to run/build the actual app (i.e. Ti build )

I started the app off by creating a default classic project, added the package.json and then ran npm install.

## Why
Because it's fun, I like a challenge and I get to learn an great deal about using ES6. I have also found out that some things when transpiled work on iOS but not on Android. This mainly seems based around defining exports, but it is also the reason I copy underscore.js in it's vanilla format, the transpiled version worked in iOS but threw an exception under Android.

## Also Tried
I did have a version that attempted to use the React.createElement and the JSX plug-in ( I think it kinda neat the way you can use JSX to define UI). I did have some success, but it got a bit complicated so I parked it as I think it requires a JSX for Titanium developing to really work. Hence in my Component class I have a generateView() function that sort of replaces the render() function in React (but not quite).

## App availablility
I am currently going to try and release a version of the app into iTunes and the Google play store....

* [Google PlayStore Link](https://play.google.com/store/apps/details?id=uk.spiralarm.spiralarm)
