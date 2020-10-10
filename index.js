var postcss = require('postcss');
var currencyDB = require('typographic-currency-db');

module.exports = postcss.plugin('postcss-currency', function () {
  return function (css) {
    css.walkDecls('content', function (decl) {
      var quote = decl.value.match(/'|"/);
      quote = quote ? quote[0] : '';

      for (var key in currencyDB) {
        var value = decl.value.replace(/['"]+/g, '').toUpperCase();

        if (value === key) {
          decl.value = quote + currencyDB[key] + quote;
        }
      }
    });
  };
});
