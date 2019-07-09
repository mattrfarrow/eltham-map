const getTimeAsString = require('./date_and_time.js');

test('time to string', () => {
    expect(getTimeAsString(new Date(2019, 1, 1, 18))).toBe("6:00pm");
});