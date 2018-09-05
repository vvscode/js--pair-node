const assert = require('chai').assert;
const sinon = require('sinon');
const debounce = require('./debounce');

const sleep = x => new Promise(resolve => setTimeout(resolve, x));

describe('debounce', () => {
  it('function', () => assert.isFunction(debounce));

  it('returns function', () => assert.isFunction(debounce(sinon.fake(), 0)));

  it('calls original function with delay', async () => {
    const cb = sinon.fake();
    const cbd = debounce(cb, 100);

    cbd();
    cbd();
    assert.equal(cb.callCount, 0);
    await sleep(100);
    assert.equal(cb.callCount, 1);
    await sleep(300);
    assert.equal(cb.callCount, 1);
  });
});
