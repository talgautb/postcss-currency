# Changelog

## 2.0.0 - 17.10.2020

* Changed `postcss` dependency version to 8, [plugin migration guide](https://evilmartians.com/chronicles/postcss-8-plugin-migration). Note: PostCSS 8 dropped Node.js 6.x, 8.x, 11.x, and 13.x versions support.
* Changed Node.js version support for Travis, minimal version now is 10
* Changed `eslint`, `gulp-mocha` dependencies to the latest, they also dropped Node.js v8
* Removed `eslint-config-postcss` dependency, because `es5` config was removed and project defaults were improved

## 1.2.0 - 16.10.2020

* Added `gulp-cli` dependency
* Changed `eslint` dependency version down to the `v5.11.0` to support Node.js v6
* Changed `gulp-mocha` dependency version down to the `v6.0.0` to support Node.js v6

## 1.1.0 - 12.10.2020

* Added simple eslint config to match the code style
* Added NPM badge
* Changed `typographic-currency-db` dependency version to `v1.1.0` with changed import
* Changed `eslint-config-postcss` dependency version back to the `v2.0,2`, check note below
* Changed `postcss` dependency version to **7**. Note: PostCSS 7 dropped Node.js v4 and 9 support since it doesn’t have security updates anymore. In general, it's an almost non-breaking change except that node 4 drop. If you want we can add this change to the readme.
* Changed readme to have https URL
* Removed Node.js v4 support from Travis

## 1.0.1 - 11.03.2019

* Change dependency version of `typographic-currency-db` to `^1.0.1`

## 1.0.0 - 19.05.2017

* Update dependencies (PostCSS 6)
* Support node >= 4
* Add eslint config to package.json
* Delte `gulp lint` task

## 0.1

* Initial release.
