var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts) {
    return postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).toEqual(output);
        expect(result.warnings()).toHaveLength(0);
    });
};

describe('postcss-currency', function () {

    it('simple test', function () {
        test('a:after{content: \'kzt\'}', 'a:after{content: \'₸\'}', { } );
    });

    it('check uppercase', function () {
        test('a:after{ content: "JPy"}', 'a:after{ content: "¥"}', { } );
    });

    it('another content', function () {
        test('a:before{ content: euri}', 'a:before{ content: euri}', { } );
    });

});

describe('check quotes', function () {

    it('check dowble quotes', function () {
        test('a:after{content: \'usd\'}', 'a:after{content: \'$\'}', { } );
    });

    it('check dowble quotes', function () {
        test('a:after{ content: "gbp"}', 'a:after{ content: "£"}', { } );
    });

    it('witout quotes', function () {
        test('a:before{ content: cny}', 'a:before{ content: ¥}', { } );
    });
});
