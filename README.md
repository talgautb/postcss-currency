# PostCSS Currency [![Build Status][ci-img]][ci] [![NPM version][npm-image]][npm-url]

[PostCSS] plugin replaces the name of currency with symbols.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/talgautb/postcss-currency.svg
[ci]:      https://travis-ci.org/talgautb/postcss-currency

```css
.foo:after {
    content: 'kzt'
}
```

```css
.foo:after {
    content: '₸'
}
```

## Usage

```js
postcss([ require('postcss-currency') ])
```

See [PostCSS] docs for examples for your environment.

## License

MIT © [talgautb](https://gtalk.kz)

[npm-url]: https://npmjs.org/package/postcss-currency
[npm-image]: https://img.shields.io/npm/v/postcss-currency.svg?style=flat-square
