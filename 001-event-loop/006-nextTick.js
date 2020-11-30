
setTimeout(() => {
  console.log('setTimeout-1'); // 4
}, 0);

setImmediate(() => {
   console.log('setImmediate'); // 3
});

queueMicrotask(() => {
  console.log('queueMicrotask-1'); // 2
});

// setTimeout(cb, 0)
process.nextTick(() => {
  console.log('nextTick');  // 1
});

/**
 * nextTick -> microTask -> phase queue
 */

