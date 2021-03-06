# benchmark.gl-site

The site for Benchmark.GL


## Requirements:

- Node 6.3.x
- nvm

## Installation

```
$ nvm install
$ npm install
```

## Quick Start

```
$ nvm use
$ npm run dev
```

## Usage

First, install your dependencies:

```
npm install
```

To start a Browsersync server and watch files for development:

```
npm run dev
```

or to build, cachebust, and minify all assets for production:

```
npm run build
```

You can also optimize PNG and JPEG images using [tinify](https://www.npmjs.com/package/tinify):

```
npm run tinify
```

## Configuration

Sensitive shit goes in `env.js`

## Deploy

* `npm run build`
* Remove `public` from gitignore.
* `git add public && git commit -m 'some commit msg'`
* `git subtree push --prefix dist origin gh-pages`

It's shitty but it'll do for now.

## Foundation

[Foundation Sites](http://foundation.zurb.com/sites.html) 6.2.0 is included with a small set of components enabled by
default. There is a list of everything you can add at [Foundation's Kitchen Sink](http://foundation.zurb.com/sites/docs/kitchen-sink.html).
To add more, uncomment the appropriate includes from the `app.scss` file along
with the appropriate settings section for the component in the `_.settings.scss`
file. This is described in detail at [Foundation's Sass docs](http://foundation.zurb.com/sites/docs/sass.html#adjusting-css-output).

[Browserify-shim](https://github.com/thlorenz/browserify-shim) is used to bundle individual Foundation JavaScript plugins. When adding
new plugins, you will need to update the shim configuration in `package.json` with the [appropriate Foundation files](http://foundation.zurb.com/sites/docs/javascript.html#file-structure).

Foundation's documentation can be found at [foundation.zurb.com](http://foundation.zurb.com/sites/docs/).
To get started with what's included by default, read these docs:

* [Global styles](http://foundation.zurb.com/sites/docs/global.html)
* [Flex Grid](http://foundation.zurb.com/sites/docs/flex-grid.html) and [Media Queries](http://foundation.zurb.com/sites/docs/media-queries.html)
* [Typography](http://foundation.zurb.com/sites/docs/typography-base.html) and [Helper Classes](http://foundation.zurb.com/sites/docs/typography-helpers.html)
* [Forms](http://foundation.zurb.com/sites/docs/forms.html) and [Buttons](http://foundation.zurb.com/sites/docs/button.html)
* [Button Group](http://foundation.zurb.com/sites/docs/button-group.html)
* [Visibility Classes](http://foundation.zurb.com/sites/docs/visibility.html)
* [Float Classes](http://foundation.zurb.com/sites/docs/float-classes.html)
* [Flexbox Classes](http://foundation.zurb.com/sites/docs/flexbox.html)
* [JavaScript](http://foundation.zurb.com/sites/docs/javascript.html)

## ESlint

[ESlint](http://eslint.org/) is used for static analysis of JavaScript files. By default,
the `.eslintrc` is configured to extend [Airbnb's base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnbbase) configuration,
with a few small modifications:

* 2 spaces for indentation.
* No semicolons.
* Only single quotes.
* Unix linebreaks.

If you use global variables that are already defined in the DOM, add them to the `globals` object
in the `.eslintrc` to [register them](http://eslint.org/docs/user-guide/configuring#specifying-globals) with the linter.

## Stylelint

[Stylelint](https://github.com/stylelint/stylelint) is used for static analysis of SASS files. By default,
the `.stylelintrc` is configured to extend [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
and uses [stylelint-selector-bem-pattern](https://github.com/davidtheclark/stylelint-selector-bem-pattern),
with a few small modifications:

* 4 spaces for indentation.
* Only single quotes.
* No vendor prefixes (autoprefixer is preferred).
* Max of 2 adjacent empty lines.
* Required empty line between nested selectors, except first nested.
* No [browser hacks](https://github.com/stylelint/stylelint/tree/master/src/rules/no-browser-hacks).
* No [unsupported browser features](http://stylelint.io/user-guide/rules/no-unsupported-browser-features/).

Generated by [mo static](https://github.com/istrategylabs/mo-static).
