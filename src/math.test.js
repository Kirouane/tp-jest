const Util = require('./math');

describe('Factorial', function () {

    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow();
    });
});

