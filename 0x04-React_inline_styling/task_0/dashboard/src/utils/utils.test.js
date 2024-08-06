<<<<<<< HEAD
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  expect(getFullYear()).toBe(2022);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent Requirement</strong> - complete by EOD");
=======
mport { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe("Utils functions", () => {
  
  test("getFullYear returns the correct year", () => {
    expect(getFullYear()).toEqual(2023);
  });

  test("getFooterCopy returns the correct string when the argument is true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  test("getFooterCopy returns the correct string when the argument is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  test("getLatestNotification returns the expected string", () => {
    expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
  });

>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
});
