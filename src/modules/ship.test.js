import Ship from "./ship";

test("ship is created", () => {
  let ship = Ship([0, 1, 2, 3, 4]);
  let expected = {
    location: [0, 1, 2, 3, 4],
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

// test("ship length is between 1 and 5", () => {
//   expect(Ship([])).toMatchObject({
//     length: 1,
//     timesHit: 0,
//     sunk: false,
//   });
//   expect(Ship([0,1,2,3,4,5])).toMatchObject({
//     length: 5,
//     timesHit: 0,
//     sunk: false,
//   });
// });

test("hit increments timesHit and calls isSunk when timesHit = length", () => {
  let ship = Ship([0, 1]);
  ship.hit();

  expect(ship).toMatchObject({
    location: [0, 1],
    length: 2,
    timesHit: 1,
    sunk: false,
  });
  ship.hit();
  expect(ship).toMatchObject({
    location: [0, 1],
    length: 2,
    timesHit: 2,
    sunk: true,
  });
});
