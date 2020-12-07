const {expect} = require('chai');
const {Readable, Writable} = require('stream');

const {CaesarCipherEncode} = require('./002-caesar-stream');

const toString = (cb) => {
  let string = '';
  return new Writable({
    write(chunk, encoding, callback) {
      string += chunk.toString();
      return callback();
    },
    final(callback) {
      process.nextTick(() => {
        cb(string)
        callback();
      })
    }
  })
};

describe('CaesarCipherEncode', () => {

  it('should create a instance of CaesarCipherEncode', () => {
    expect(new CaesarCipherEncode()).to.be.instanceOf(CaesarCipherEncode);
  });

  it('should encode stream', (done) => {
    const shift = 1;
    const input = Readable.from(['a', 'b', 'c']);
    const expected = 'bcd';

    const encoder = new CaesarCipherEncode(shift);

    input.pipe(encoder).pipe(toString(actual => {
      expect(actual).to.equal(expected);
      done();
    }));
  });
});
