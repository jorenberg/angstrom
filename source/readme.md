## Ångström®: Core module(s)
Howdy<i>!</i>

Ångström® — is a semantic, modular, and modern responsive Sass breakpoint based on W3C international standards.

The core module(s) of Ångström, is organised in a following way of directory structure:

```ssh
angstrom/
│ └──core
│     ├──1. coffee/
│     ├──2. fonts/
│     ├──3. images/
│     ├──4. icons/
│     └──5. scss/
├── dist/
│     ├──1. css/
│     ├──2. images/
│     ├──3. icons/
│     └──4. script/
└── docs/
      └── examples/
```
Ångström® is developed by using Sass + Compass + Ruby and build with Node.js® + Grunt & it's modules.

### Sass [![Gem Version](https://badge.fury.io/rb/sass.png)](https://rubygems.org/gems/sass)
**Sass makes CSS fun again**. Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.
It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

Sass has two syntaxes. The new main syntax (as of Sass 3) is known as "SCSS" (for "Sassy CSS"), and is a superset of CSS's syntax.
This means that every valid CSS stylesheet is valid SCSS as well. SCSS files use the extension `.scss`.

Sass was envisioned by [Hampton Catlin](http://www.hamptoncatlin.com)(@hcatlin), [Natalie Weizenbaum](https://twitter.com/nex3) is the primary developer and architect of Sass, and [Chris Eppstein](http://twitter.com/chriseppstein) is a core contributor to Sass and the creator of [Compass](http://compass-style.org/).

### Compass
It is an open-source authoring framework for the [Sass](http://sass-lang.com/) css preprocessor. It helps you build stylesheets faster with a huge library of Sass mixins and functions, advanced tools for spriting, and workflow improvements including file based Sass configuration and a simple pattern for building and using Compass extensions.

This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/), [Sass](http://sass-lang.com/tutorial.html), and [Compass](http://compass-style.org/install/) >=1.0.1 installed. If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass and Sass.

### Ruby
A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

Ruby is a language of careful balance. Its creator, [Yukihiro “Matz” Matsumoto](http://www.rubyist.net/~matz/), blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a new language that balanced functional programming with imperative programming.

### Node.js®
Node.js® is a JavaScript runtime built on Chrome's [V8 JavaScript engine](https://developers.google.com/v8/). Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, [npm](https://www.npmjs.com/), is the largest ecosystem of open source libraries in the world.

### npm
[npm](https://github.com/npm) is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code. The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.
