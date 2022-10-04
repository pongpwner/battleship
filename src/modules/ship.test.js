import Ship from "./ship";

test("ship is created", () => {
  let ship = Ship(5);
  let expected = {
    length: 5,
    timesHit: 0,
    sunk: false,
    // hit: function hit() {
    //     this.timesHit++;
    //     if ((this.timesHit = this.length)) {
    //       isSunk();
    //     }
    //   },
    //   isSunk: function isSunk() {
    //     this.sunk = true;
    //   },
  };

  expect(ship).toMatchObject(expected);
});

test("ship length is between 1 and 5", () => {
  expect(Ship(0)).toMatchObject({
    length: 1,
    timesHit: 0,
    sunk: false,
  });
  expect(Ship(6)).toMatchObject({
    length: 5,
    timesHit: 0,
    sunk: false,
  });
});

test("hit increments timesHit", () => {
  let ship = Ship(2);
  ship.hit();

  expect(ship).toMatchObject({
    length: 2,
    timesHit: 1,
    sunk: false,
  });
  ship.hit();
  expect(ship).toMatchObject({
    length: 2,
    timesHit: 2,
    sunk: true,
  });
});
