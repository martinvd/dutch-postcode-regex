import test from 'ava';
import m from '.';

const fixture = [
  '3300AB',
  '3300ab',
  '3300 AB',
  '3300 ab'
];

const fixtureNot = [
  'A300AB',
  '3A00AB',
  '33A0AB',
  '330AAB',
  '33001B',
  '3300A1',
  '3300  AA',
  '330AA',
  '3300A',
  '3 300AB',
  '33 00AB',
  '330 0AB',
  '3300A B',
  '3300 A B',
  '0300AB',
  '3300SS',
  '3300SD',
  '3300SA'
];

test('extract', t => {
  for (const x of fixture) {
    t.is((m().exec(`foo ${x} bar`) || [])[0], x);
  }

  t.is(m().exec('postcode:1234AB')[0], '1234AB');
});

test('exact', t => {
  for (const x of fixture) {
    t.true(m({exact: true}).test(x));
  }
});

test('failures', t => {
  for (const x of fixtureNot) {
    t.false(m({exact: true}).test(x));
  }
});
