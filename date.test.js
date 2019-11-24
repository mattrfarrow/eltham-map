const dateAndTime = require('./date_and_time.js');

test('time to string', () => {
    expect(dateAndTime.getTimeAsString(new Date(2019, 1, 1, 18))).toBe("6:00pm");
});

test('time to string with end hours', () => {
    expect(dateAndTime.getTimeAsString(new Date(2019, 1, 1, 18), {h:21})).toBe("6:00-9:00pm");
});

test('time to string with end hours and minutes', () => {
    expect(dateAndTime.getTimeAsString(new Date(2019, 1, 1, 18), {h:21, m:30})).toBe("6:00-9:30pm");
});

test('get next Monday after Sunday 24 Nov', () => {
  expect(dateAndTime.getDateOfNextSpecificDayOfWeek(new Date(2019, 10, 24), dateAndTime.monday)).toStrictEqual(new Date(2019,10,25))
})

test('get next Saturday after Sunday 24 Nov', () => {
  expect(dateAndTime.getDateOfNextSpecificDayOfWeek(new Date(2019, 10, 24), dateAndTime.saturday)).toStrictEqual(new Date(2019,10,30))
})