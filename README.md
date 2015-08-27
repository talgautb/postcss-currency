# PostCSS Currency [![Build Status][ci-img]][ci]

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

MIT © [talgautb](http://gtalk.kz)