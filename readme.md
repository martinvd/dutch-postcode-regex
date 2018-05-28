# dutch-postcode-regex [![Build Status](https://travis-ci.org/martinvd/dutch-postcode-regex.svg?branch=master)](https://travis-ci.org/martinvd/dutch-postcode-regex)

> Regular expression for matching Dutch postcodes

## Install

```
$ npm install dutch-postcode-regex
```

## Usage

```js
const dutchPostcodeRegex = require('dutch-postcode-regex');

// Contains a postcode
dutchPostcodeRegex().test('foo 33000AB');
//=> true

// Is a postcode
dutchPostcodeRegex({exact: true}).test('bar 2012 ES');
//=> false

'Their postcode is 3121 ar, or was it 3201EB?'.match(dutchPostcodeRegex());
//=> ['3121 ar', '3201EB']
```

## API

### dutchPostcodeRegex([options])

Returns a regex for matching Dutch postcodes.

#### options

##### exact

Type: `boolean`<br>
Default: `false` *(Matches any Dutch postcode in a string)*

Only match an exact string.<br>
Useful with `RegExp#test` to check if a string is a Dutch postcode.

## License

MIT © [Martin van Driel](https://martinvandriel.com)
