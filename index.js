let currencyDB = require('typographic-currency-db');

module.exports = () => {
  return {
    postcssPlugin: 'postcss-currency',
    Declaration(decl) {
      let quote = decl.value.match(/'|"/);
      let value = decl.value.replace(/["']+/g, '').toUpperCase();

      quote = quote ? quote[0] : '';

      if (Object.prototype.hasOwnProperty.call(currencyDB, value)) {
        decl.value = quote + currencyDB[value] + quote;
      }
    }
  };
};

module.exports.postcss = true;
