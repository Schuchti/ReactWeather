function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number') {
      resolve(a + b);
    } else {
      reject('a & b need to be numbers!');
    }
  });
}

addPromise(2, 3).then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});

addPromise('Olaf', 3).then(function(sum) {
  console.log('this should not show up');
}, function(err) {
  console.log('This should appear', err);
});
