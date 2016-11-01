# Ångström® [![Apache License](https://img.shields.io/badge/license-Apache-blue.svg)](https://github.com/iamprabhat/angstrom/blob/master/LICENSE)
<i><b>"</b>I have no special talents. I am only passionately curious.<b>"</b></i> — Albert Einstein.

<i>A semantic, modular, and modern responsive Sass breakpoint based on W3C international standards</i>.&nbsp;<kbd>t</kbd>&nbsp;<kbd>esc</kbd>

## About
While, I was working to build NobelDB — a manually curated dedicated database of nobel laureates; I was applied some declarations to respond the whole project on different breakpoint(s) for desktop, tablet, and mobile. And, I was not able to fit the entire working Front-End in that way. Then, I have started this project to work on the same order to do so. Cool<i>!</i>

This, project is a spun-off of NobelDB, right. It is a semantic, modular, and modern responsive Sass based with flavour of `.scss`, breakpoint based on W3C international standards.

### What's inside?
A lot of stuff. Seriously, a lot of stuff. Check them out in the file browser above and see what components may mesh up with you. I have written some class(s) to work for responsiveness and to work on the principle of progressive enhancement. All Ångström® is build for every layout, whatever in the daily use by the help of Sass and JavaScript.

<b>Note</b>: Fork it, remove what you don't use, and build on what you do use.

### What's included?
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:
```
angstrom/
├── css/
│   ├── angstrom.css
│   ├── angstrom.css.map
│   ├── angstrom.min.css
│   └── angstrom.min.css.map
└── script/
    ├── angstrom.js
    └── angstrom.min.js
```
<b>Note</b>: As in provided distribution of — CSS and JavaScript (`angstrom.*`), as well as compiled and minified CSS and JavaScript (`angstrom.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`angstrom.*.map`) are available for use with certain browser's developer tools.

### Documentation
Ångström's documentation, included in this repo in to the root directory, is built with [Grunt](http://gruntjs.com/) and publicly hosted on GitHub Pages at <https://iamprabhat.github.io/angstrom/>. <i>The docs may also be run locally.</i>

### Running documentation locally
1. Run through the [tooling setup](https://github.com/iamprabhat/angstrom/blob/master/BUILDING.md#tooling-setup) to install `Node.js® + NPM` and other Ruby dependencies `Compass`.
2. Run `grunt` (or a specific set of Grunt tasks) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `./` directory, run `$ grunt serve` in to the command line.
4. Open <http://localhost:9000> in your browser, and voilà.
