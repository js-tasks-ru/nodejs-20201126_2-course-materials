const {EventEmitter} = require('events');

class MyEmitter extends EventEmitter {
  constructor(str) {
    super();
    process.nextTick(() => this.emit('error', new TypeError('should be a string')));
    // this.emit('start');
  }
}

const ee = new MyEmitter(1);

ee.on('error', e => {
  console.log(`Error event: ${e.message}`);
});

ee.on('start', () => {
  console.log('Started...');
});
