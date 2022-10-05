function Ship(location) {
  let length = location.length;
  // if (location.length < 1) length = 1;
  // if (location.length > 5) length = 5;

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
    location,
    length,
    timesHit,
    sunk,
    hit,
    isSunk,
  };
}

export default Ship;
