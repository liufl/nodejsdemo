require('console-trace')({
  always: true,
})

console.log('a');     // tracing
console.error('a');   // tracing