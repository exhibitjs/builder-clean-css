> # clean-css
>
> **Exhibit.js builder plugin**
>
> Minifies CSS files using [clean-css](https://github.com/jakubpawlowicz/clean-css).
>
> ```sh
> $ npm install -D exhibit-builder-clean-css
> ```
>
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]


## Usage

```js
  .use('clean-css', options)
```


## Options

All the usual [clean-css](https://github.com/jakubpawlowicz/clean-css) options work. The only difference is that this plugin enables the `sourceMap` option by default.

#### Additional options

> **`include`** (string/array/function) — default: `'**/*.css'`

Chooses which files this plugin should affect. Follows Exhibit’s [glob convention](https://github.com/exhibitjs/exhibit/blob/master/docs/glob-convention.md).


---

## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-clean-css
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-clean-css.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-clean-css
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-clean-css.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-clean-css
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-clean-css.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-clean-css#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-clean-css.svg?style=flat-square&label=devDeps

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-clean-css#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-clean-css.svg?style=flat-square&label=peerDeps
