// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test isPhoneNumber true', () => {
  expect(isPhoneNumber('(916)882-0335')).toBe(true);
});

test('test isPhoneNumber false', () => {
  expect(isPhoneNumber('9168820335')).toBe(false);
});

test('test isPhoneNumber true', () => {
  expect(isPhoneNumber('(800)588-2305')).toBe(true);
});

test('test isPhoneNumber false', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});

test('test isEmail true', () => {
  expect(isEmail('vmccloskey@ucsd.edu')).toBe(true);
});

test('test isEmail false', () => {
  expect(isEmail('obamaphone')).toBe(false);
});

test('test isEmail true', () => {
  expect(isEmail('hello@aol.com')).toBe(true);
});

test('test isEmail false', () => {
  expect(isEmail('ola@ucsd')).toBe(false);
});

test('test isStrongPassword true', () => {
  expect(isStrongPassword('Aweson21')).toBe(true);
});

test('test isStrongPassword false', () => {
  expect(isStrongPassword('oba')).toBe(false);
});

test('test isStrongPassword true', () => {
  expect(isStrongPassword('Finfle60_')).toBe(true);
});

test('test isStrongPassword false', () => {
  expect(isStrongPassword('waaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});

test('test isDate true', () => {
  expect(isDate('1/15/2004')).toBe(true);
});

test('test isDate false', () => {
  expect(isDate('9168820335')).toBe(false);
});

test('test isDate true', () => {
  expect(isDate('05/23/2020')).toBe(true);
});

test('test isDate false', () => {
  expect(isDate('105/4/5043')).toBe(false);
});

test('test isHexColor true', () => {
  expect(isHexColor('234643')).toBe(true);
});

test('test isHexColor false', () => {
  expect(isHexColor('red')).toBe(false);
});

test('test isHexColor true', () => {
  expect(isHexColor('123')).toBe(true);
});

test('test isHexColor false', () => {
  expect(isHexColor('105/78')).toBe(false);
});