var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-currency', function () {

    it('simple test', function (done) {
        test('a:after{content: \'kzt\'}', 'a:after{content: \'₸\'}', { }, done);
    });

    it('check uppercase', function (done) {
        test('a:after{ content: "JPy"}', 'a:after{ content: "¥"}', { }, done);
    });

    it('another content', function (done) {
        test('a:before{ content: euri}', 'a:before{ content: euri}', { }, done);
    });

});

describe('check quotes', function () {

    it('check dowble quotes', function (done) {
        test('a:after{content: \'usd\'}', 'a:after{content: \'$\'}', { }, done);
    });

    it('check dowble quotes', function (done) {
        test('a:after{ content: "gbp"}', 'a:after{ content: "£"}', { }, done);
    });

    it('witout quotes', function (done) {
        test('a:before{ content: cny}', 'a:before{ content: ¥}', { }, done);
    });
});
