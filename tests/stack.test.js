const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek after pushing returns top value', () => {
    stack.push('Test123');
    expect(stack.peek()).toBe('Test123');
});

// Eget test: kontrollera att pop på tom stack ger undefined
test('stack returns undefined after popping empty stack', () => {
    stack.pop(); // töm stacken
    stack.pop(); // extra
    expect(stack.pop()).toBeUndefined();
});
