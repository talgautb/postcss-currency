let postcss = require('postcss');
let expect = require('chai').expect;

let plugin = require('../');

let test = function (input, output, opts) {
  return postcss([plugin(opts)])
    .process(input, { from: undefined })
    .then((result) => {
      expect(result.css).to.equal(output);
      expect(result.warnings()).to.have.length(0);
    });
};

describe('postcss-currency', () => {
  it('simple test', () => {
    return test("a:after{content: 'kzt'}", "a:after{content: '₸'}", {});
  });

  it('check uppercase', () => {
    return test('a:after{ content: "JPy"}', 'a:after{ content: "¥"}', {});
  });

  it('another content', () => {
    return test('a:before{ content: euri}', 'a:before{ content: euri}', {});
  });
});

describe('check quotes', () => {
  it('check double quotes', () => {
    return test("a:after{content: 'usd'}", "a:after{content: '$'}", {});
  });

  it('check double quotes', () => {
    return test('a:after{ content: "gbp"}', 'a:after{ content: "£"}', {});
  });

  it('without quotes', () => {
    return test('a:before{ content: cny}', 'a:before{ content: ¥}', {});
  });
});
