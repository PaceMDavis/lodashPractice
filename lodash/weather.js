'use strict';

var _ = require('lodash');


const assert = require('assert');

// console.log(_.chunk(['a','b','c','d'],3));


const weather = [
  { id: 5743823523151872,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "NNE",
    created: "2018-07-11T20:53:03.251710Z",
    applicable_date: "2018-07-11",
    min_temp: 14.43,
    max_temp: 23.36,
    the_temp: 22.785,
    wind_speed: 5.682503989556987,
    wind_direction: 21.6264939172659,
    air_pressure: 1024.45,
    humidity: 58,
    visibility: 8.683041040324504,
    predictability: 70
  },
  { id: 6188149969518592,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "NE",
    created: "2018-07-11T20:53:03.268190Z",
    applicable_date: "2018-07-12",
    min_temp: 14.81,
    max_temp: 25.52,
    the_temp: 24.61,
    wind_speed: 3.2461141472739206,
    wind_direction: 42.72552812997726,
    air_pressure: 1024.605,
    humidity: 54,
    visibility: 10.633835898353615,
    predictability: 71
  },
  { id: 5742049676492800,
    weather_state_name: "Showers",
    weather_state_abbr: "s",
    wind_direction_compass: "E",
    created: "2018-07-11T20:53:03.947390Z",
    applicable_date: "2018-07-13",
    min_temp: 15.5525,
    max_temp: 25.3475,
    the_temp: 24.175,
    wind_speed: 3.6572546846814604,
    wind_direction: 90.32910675612557,
    air_pressure: 1025.385,
    humidity: 57,
    visibility: 10.181166984808717,
    predictability: 73  
  },
  { id: 6696130918219776,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "SSW",
    created: "2018-07-11T20:53:04.068570Z",
    applicable_date: "2018-07-14",
    min_temp: 15.915,
    max_temp: 27.0925,
    the_temp: 26.585,
    wind_speed: 3.649847972759087,
    wind_direction: 200.04283406736377,
    air_pressure: 1024.4450000000002,
    humidity: 52,
    visibility: 11.14056410562316,
    predictability: 71
  },
];

const strNums = [1,2,3,4,6,4,3,2,4,6,7,8,5,4,3,2]
// const strNums2 = [1,2,3,4,6,4,3,2,4,6,7,8,5,4,3,2]
function chunk (arr, num) {
  return _.chunk(arr,num);
}
function reverse(arr) {
  return _.reverse(arr)
}
function without(arr, value) {
  return _.without(arr, value)
}
function shuffle(arr) {
  return _.shuffle(arr)
}
function last(arr) {
  return _.last(arr)
}
// console.log(last(strNums))
// console.log(without(strNums, 3))
// console.log(reverse(strNums))
console.log(shuffle(strNums))

// Tests
if (typeof describe === 'function') {
  describe('chunk', () => {
    it('should return an array of arrays the size of the chunk number', () => {
      const array = chunk(strNums,5);
      assert.equal(
        array[0].length, 5
      );
    });
    // it('board should have 24 checkers', () => {
    //   assert.equal(game.board.checkers.length, 24);
    // });
  });
  describe('last', () => {
    it('should grab the last element in an array', () => {
      const element = last(strNums);
      assert.equal(
        element, 2
      );
    });
  });
  describe('reverse', () => {
    it('should verify the first index in array is equal to last index originally', () => {
      const array = reverse(strNums);
      assert.equal(
        array[0], 2
      );
    });
  });
  describe('without', () => {
    it('verify that the removed element is not present in the array', () => {
      const array = without(strNums, 1);
      for(let i = 0; i<array.length; i++){
      assert.notEqual(
        array[i], 1
        )};
    });
  });
  describe('shuffle', () => {
    it('should test that the sum of both arrays are equal', () => {
      const array = shuffle(strNums);
      let totalShuffle = 0;
      let totalArray = 0;
      for(let i = 0; i< array.length; i++) {
        totalShuffle += array[i]
        totalArray += strNums[i]
      }
      assert.equal(
        totalArray, totalShuffle
      );
    });
  });
 
} else {
  console.log(chunk(strNums,5));
}
