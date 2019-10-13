const getTimeAsString = require('./date_and_time.js');

test('time to string', () => {
    expect(getTimeAsString(new Date(2019, 1, 1, 18))).toBe("6:00pm");
});

test('time to string with end hours', () => {
    expect(getTimeAsString(new Date(2019, 1, 1, 18), {h:21})).toBe("6:00-9:00pm");
});

test('time to string with end hours and minutes', () => {
    expect(getTimeAsString(new Date(2019, 1, 1, 18), {h:21, m:30})).toBe("6:00-9:30pm");
});