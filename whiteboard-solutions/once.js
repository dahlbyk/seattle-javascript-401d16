function once(fn) {
  let triggered = 0;
  return (...args) => {
    if(triggered++) return;
    return fn(...args);
  }
}
