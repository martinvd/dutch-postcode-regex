'use strict';

const re = '[1-9]\\d{3} ?(?!sa|sd|ss)[a-z]{2}';

module.exports = (options = {}) => (
  options.exact ? new RegExp(`^${re}$`, 'i') : new RegExp(re, 'ig')
);
