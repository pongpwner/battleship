function Ship(size) {
  let length = size;
  if (size < 1) length = 1;
  if (size > 5) length = 5;

  let timesHit = 0;
  let sunk = false;
  function hit() {
    this.timesHit = this.timesHit + 1;

    if (this.timesHit === this.length) {
      this.isSunk();
      return;
    }

    return;
  }
  function isSunk() {
    this.sunk = true;
    return true;
  }
  return {
    length,
    timesHit,
    sunk,
    hit,
    isSunk,
  };
}

export default Ship;
